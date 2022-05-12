import React from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'

const PageHome = ({blok}) => (
  <main {...storyblokEditable(blok)}>
    {blok.header ?
      blok.header.map(blok => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      )) :
      null}
    {blok.body ?
      blok.body.map(blok => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      )) :
      null}
  </main>
)

export default PageHome
