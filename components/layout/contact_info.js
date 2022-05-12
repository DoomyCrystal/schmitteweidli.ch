import React from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'

const ContactInfo = ({blok, currentStory}) => {
    return (
        <ul className="container" {...storyblokEditable(blok)}>
          {blok?.contact_info.map(blok => (
            <StoryblokComponent blok={blok} key={blok._uid} />
          ))}
        </ul>
    )
}

export default ContactInfo
