import Head from 'next/head'
import Link from 'next/link'
import Storyblok, {useStoryblok} from '../lib/storyblok'
import DynamicComponent from '../components/dynamic-component'
import Logo from '../components/layout/logo'
import Navigation from "../components/layout/navigation"
import SeoMetaTags from "../components/layout/seo-meta-tags.js"
import NavLinks from '../components/nav_links.js'
import ContactInfo from '../components/contact_info'

export default function Page({story, links, preview}) {
    //const enableBridge = true // load the storyblok bridge everywhere
    story = useStoryblok(story, preview)

    return (
        <>
            <SeoMetaTags story={story} />
            <div className="navbar container">
              <div className="col-span-full flex items-end">
                  <Link href="/">
                      <a><Logo/></a>
                  </Link>
                  <NavLinks blok={links.content} currentStory={story} />
              </div>
            </div>
            <DynamicComponent blok={story?.content}/>

            <footer>
              <ContactInfo blok={links.content}/>
            </footer>
        </>
    )
}

export async function getStaticProps({query, params, preview = false}) {
    // home is the default slug for the homepage in Storyblok
    let slug = params?.slug ? params.slug.join("/") : "home";
    // load the published content outside of the preview mode
    let sbParams = {
        version: 'published', // or 'published'
        resolve_links: 'url'
    }

    if (query?._storyblok || preview) {
        // load the draft version inside of the preview mode
        sbParams.version = 'draft'
        sbParams.cv = Date.now()
    }
    let storyQuery = Storyblok.get(`cdn/stories/${slug}`, sbParams)
    let linksQuery = Storyblok.get(`cdn/stories/layout/navigation`, sbParams)

    const responses = await Promise.all([storyQuery, linksQuery])
    return {
        props: {
            story: responses[0].data ? responses[0].data.story : null,
            links: responses[1].data ? responses[1].data.story : null,
            key: slug,
            preview,
        },
        revalidate: 3600, // revalidate every hour
    }
}

export async function getStaticPaths() {
    // get all links from Storyblok
    let {data} = await Storyblok.get("cdn/links/");

    let paths = [];
    // create a routes for every link
    Object.keys(data.links).forEach((linkKey) => {
        // do not create a route for folders and home
        if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
            return;
        }

        // get array for slug because of catch all
        const slug = data.links[linkKey].slug;
        let splittedSlug = slug.split("/");

        // creates all the routes
        paths.push({params: {slug: splittedSlug}});
    });

    return {
        paths: paths,
        fallback: true,
    };
}
