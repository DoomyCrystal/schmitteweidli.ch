import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import Link from 'next/link'

const NavLink = ({ blok, currentStory }) => {
  return (
    <Link href={blok.link?.cached_url ? blok.link.cached_url : null} {...storyblokEditable(blok)}>
      <a className={`block px-3 py-2 rounded text-lg md:text-base leading-none font-bold hover:text-green-800${blok.link.story.slug == currentStory.slug ? ' text-green-800 bg-green-100' : ' hover:bg-neutral-100'}`} target={blok.new_tab ? '_blank' : '_self'} rel={blok.new_tab ? 'noreferrer' : undefined}>{blok.name}</a>
    </Link>
  )
}

export default NavLink
