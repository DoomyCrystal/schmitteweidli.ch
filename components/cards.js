import React from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import toSlug from './helpers/to_slug'

const Cards = ({ blok }) => {
  return (
    <div id={blok.headline && toSlug(blok.headline)} className="cards container" {...storyblokEditable(blok)}>
      <div className="col-span-full md:col-start-3 md:col-span-8 grid grid-cols-8 gap-5 md:gap-6">
        {blok.headline && <h2 className="col-span-full mb-0">{blok.headline}</h2>}
        {blok.cards.map(blok => (
          <StoryblokComponent blok={blok} key={blok._uid}/>
        ))}
      </div>
    </div>
  )
}

export default Cards
