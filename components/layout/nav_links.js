import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import NavLink from './nav_link'

const NavLinks = ({blok, currentStory, isOpen}) => {
    return (
        <ul className={`flex flex-col md:flex-row items-start md:ml-8 md:-mb-2 overflow-hidden${isOpen ? ' animate-grow' : ''}`} {...sbEditable(blok)}>
          {blok.nav_links.map(blok => (
            <li key={blok._uid} className="nav-item py-1 md:py-0 md:px-1 first:pt-6 first:md:pt-0"><NavLink blok={blok} currentStory={currentStory} /></li>
          ))}
        </ul>
    )
}

export default NavLinks
