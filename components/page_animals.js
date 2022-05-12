import React from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'

const PageAnimals = ({blok}) => (
  <main {...storyblokEditable(blok)}>
    {blok.body ?
      blok.body.map(blok => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      )) :
      null}
  </main>
)

export default PageAnimals
