import React from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'

const Animals = ({blok}) => {
    return (
        <div className="animals container" {...storyblokEditable(blok)}>
          <div className="col-span-full">
            {blok.headline && <h1 className="text-center">{blok.headline}</h1>}
            <ul className="grid grid-cols-12 gap-5 md:gap-6">
              {blok.animals.map(blok => (
                <StoryblokComponent blok={blok} key={blok._uid}/>
              ))}
            </ul>
          </div>
        </div>
    )
}

export default Animals
