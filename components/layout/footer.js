import React from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'

const Footer = ({ blok }) => {
  return (
    <div className="m-5 md:m-6 mt-0 rounded-lg bg-red-800" {...storyblokEditable(blok)}>
      <div className="container py-10 md:py-12">
        {blok?.footer.map(blok => (
          <StoryblokComponent blok={blok} key={blok._uid}/>
        ))}
      </div>
    </div>
  )
}

export default Footer
