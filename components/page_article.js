import React from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'

const PageArticle = ({ blok }) => {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.header.map(blok => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
      {blok.body.map(blok => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  )
}

export default PageArticle
