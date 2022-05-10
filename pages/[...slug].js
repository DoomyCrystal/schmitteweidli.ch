import { useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import Head from 'next/head'
import Link from 'next/link'
import Storyblok, {useStoryblok} from '../lib/storyblok'
import SeoMetaTags from "../components/layout/seo-meta-tags.js"
import Logo from '../components/layout/logo'
import Icon from '../components/helpers/icon'
import NavLinks from '../components/layout/nav_links.js'
import DynamicComponent from '../components/dynamic-component'
import ContactInfo from '../components/layout/contact_info'
import Footer from '../components/layout/footer'
import React from 'react'

export default function Page({story, links, preview}) {
    //const enableBridge = true // load the storyblok bridge everywhere
    story = useStoryblok(story, preview)

    const [isOpen, setOpen] = useState(false)
    const isDesktop = useMediaQuery('(min-width: 768px)')

    function toggleMenu() {
      setOpen(!isOpen)
    }
    return (
        <>
            <SeoMetaTags story={story} />
            <div className={`navbar container absolute md:relative m-2 md:m-0 rounded-lg bg-white overflow-hidden z-10${isOpen ? ' shadow-lg' : ''}`}>
              <div className="col-span-full block md:flex md:items-end">
                <div className="flex justify-between">
                    <Link href="/">
                        <a><Logo/></a>
                    </Link>
                    <button className="btn -icon -link md:hidden" type="button" onClick={toggleMenu}>
                      <span>Menü</span>
                      <Icon name={isOpen ? 'close-line' : 'menu-line'}/>
                    </button>
                  </div>
                  {(isOpen || isDesktop) && <NavLinks blok={links?.content} currentStory={story} isOpen={isOpen} />}
              </div>
            </div>
              {!story?.content.header && <div className="h-24 md:hidden"/>}
              <DynamicComponent blok={story?.content} story={story}/>
            <footer>
              <ContactInfo blok={links?.content}/>
              <Footer blok={links?.content}/>
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
