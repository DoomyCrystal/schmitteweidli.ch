import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import DynamicComponent from './dynamic-component'

const ContactInfo = ({blok, currentStory}) => {
    return (
        <ul className="container" {...sbEditable(blok)}>
          {blok.contact_info.map(blok => (
            <DynamicComponent blok={blok} key={blok._uid} />
          ))}
        </ul>
    )
}

export default ContactInfo
