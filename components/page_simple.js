import React from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'

const PageArticle = ({ blok, story }) => {
  return (
    <main {...storyblokEditable(blok)}>
      {story.name && <div className="container pt-12 pb-0">
        <div className="col-start-3 col-span-8">
          <h1>{story.name}</h1>
        </div>
      </div>}
      {blok.body.map(blok => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  )
}

export default PageArticle
