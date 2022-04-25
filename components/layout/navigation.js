import React from 'react'
import Link from 'next/link'
import {sbEditable} from '@storyblok/storyblok-editable'

const Navigation = ({blok, currentStory}) => (
    <nav className="flex justify-center flex-row gap-6" {...sbEditable(blok)}>
      {blok?.nav_links ?
        blok?.nav_links.map(blok => (
          <DynamicComponent blok={blok} key={blok._uid} />
        )) :
        null}
    </nav>
)

export default Navigation
