import React from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'

const Cards = ({ blok }) => {
  return (
    <div className="container" {...storyblokEditable(blok)}>
      <div className="col-span-full md:col-start-3 md:col-span-8 grid grid-cols-8 gap-5 md:gap-6">
        {blok.cards.map(blok => (
          <StoryblokComponent blok={blok} key={blok._uid}/>
        ))}
      </div>
    </div>
  )
}

export default Cards
