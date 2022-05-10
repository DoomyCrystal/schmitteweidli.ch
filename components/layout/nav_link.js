import React from 'react'
import { sbEditable } from '@storyblok/storyblok-editable'
import Link from 'next/link'

const NavLink = ({ blok }) => {
  return (
    <Link href={blok.link ?.cached_url ? blok.link.cached_url : null} {...sbEditable(blok)}>
      <a className="block px-3 py-2 rounded text-lg md:text-base leading-none font-bold hover:text-green-800 hover:bg-neutral-100" target={blok.new_tab ? '_blank' : '_self'} rel={blok.new_tab ? 'noreferrer' : undefined}>{blok.name}</a>
    </Link>
  )
}

export default NavLink
