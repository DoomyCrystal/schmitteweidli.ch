import React from 'react'
import DynamicComponent from '../dynamic-component'
import Link from 'next/link'
import NavLink from '../nav_link'
import {sbEditable} from '@storyblok/storyblok-editable'

const Navigation = ({blok, currentStory}) => {
    return (<nav className="flex" {...sbEditable(blok)}>
    {blok.nav_links ?
      blok.nav_links.map(blok => (
        <NavLink blok={blok}/>
      )) :
    null }
    </nav>)
}

export default Navigation
