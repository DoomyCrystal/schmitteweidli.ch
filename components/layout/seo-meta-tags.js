import React from 'react'
import Head from "next/head"

const SeoMetaTags = ({story, robots = 'index, follow'}) => {
    return (
        <Head>
            <title>{story?.content?.seo?.title ?? story?.name} · Kräuterei Schmitteweidli</title>
            <meta name="created" content={story?.published_at} />
            <meta name="robots" content={robots} />
            <meta property="og:type" content="website" />
            <meta name="twitter:title" property="og:title" content={story?.content?.seo?.title ?? story?.name} />
            <meta name="twitter:url" property="og:url" content={`https://schmitteweidli.ch/${story?.slug}`} />
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:domain" property="og:site_name" content="Kräuterei Schmitteweidli" />
            <meta name="description" content={story?.content?.seo?.description ?? ''} lang={story?.lang === 'default'  ? 'de' : story?.lang}/>
            <meta name="twitter:description" property="og:description" content={story?.content?.seo?.description ?? ''}/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#167500"/>
            <meta name="msapplication-TileColor" content="#167500"/>
            <meta name="theme-color" content="#ffffff"/>
        </Head>
    )
}

export default SeoMetaTags
