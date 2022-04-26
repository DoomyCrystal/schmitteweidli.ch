import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import DynamicComponent from './dynamic-component'

const NavLinks = ({blok, currentStory}) => {
    return (
        <ul className="flex ml-8 -mb-2" {...sbEditable(blok)}>
          {blok.nav_links.map(blok => (
            <li key={blok._uid}><DynamicComponent blok={blok} /></li>
          ))}
        </ul>
    )
}

export default NavLinks
