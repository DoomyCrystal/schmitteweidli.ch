import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import DynamicComponent from '../dynamic-component'

const NavLinks = ({blok, currentStory, isOpen}) => {
    return (
        <ul className={`block md:flex md:ml-8 md:-mb-2 overflow-hidden${isOpen ? ' animate-grow' : ''}`} {...sbEditable(blok)}>
          {blok.nav_links.map(blok => (
            <li key={blok._uid} className="nav-item py-1 md:py-0 md:px-1 first:pt-6 first:md:pt-0"><DynamicComponent blok={blok} /></li>
          ))}
        </ul>
    )
}

export default NavLinks
