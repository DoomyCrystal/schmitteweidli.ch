import React from 'react'
import { getStoryblokApi, StoryblokComponent, useStoryblokState } from '@storyblok/react'
import SeoMetaTags from "../components/layout/seo-meta-tags"
import MainMenu from '../components/layout/main_menu.js'
import ContactInfo from '../components/layout/contact_info'
import Footer from '../components/layout/footer'
import Script from 'next/script'

export default function Page({story, global_story}) {
    story = useStoryblokState(story)

    if (!story?.content) {
        return <div>Lade...</div>
    }
    return (
      <>
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              strategy="lazyOnload"
              src="https://www.googletagmanager.com/gtag/js?id=G-2QWQZFGJTD"
            />
            <Script strategy="lazyOnload" id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                
                    gtag('config', 'G-2QWQZFGJTD');
                `}  
            </Script>
          </>
        )}
        <SeoMetaTags story={story} />
        <MainMenu blok={global_story.content} currentStory={story} />
        {!story.content.header && <div className="h-24 md:hidden" />}
        <StoryblokComponent blok={story.content} story={story} />
        <footer>
          <ContactInfo blok={global_story.content} />
          <Footer blok={global_story.content} />
        </footer>
      </>
    )
}

export async function getStaticProps({query, params, preview = false}) {
    const storyblokApi = getStoryblokApi()
    // home is the default slug for the homepage in Storyblok
    let slug = params?.slug ? params.slug.join("/") : "home";
    // load the published content outside of the preview mode
    let sbParams = {
        version: 'draft', // change to 'published' when going live
        resolve_links: 'url'
    }

    if (query?._storyblok || preview) {
        // load the draft version inside of the preview mode
        sbParams.version = 'draft'
        sbParams.cv = Date.now()
    }
    let storyQuery = storyblokApi.get(`cdn/stories/${slug}`, sbParams)
    let globalQuery = storyblokApi.get(`cdn/stories/global`, sbParams)

    const responses = await Promise.all([storyQuery, globalQuery])
    return {
        props: {
            story: responses[0].data ? responses[0].data.story : null,
            global_story: responses[1].data ? responses[1].data.story : null,
            key: slug,
            preview,
        },
        revalidate: 3600, // revalidate every hour
    }
}

export async function getStaticPaths() {
    const storyblokApi = getStoryblokApi()
    // get all links from Storyblok
    let { data } = await storyblokApi.get("cdn/links/");

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
