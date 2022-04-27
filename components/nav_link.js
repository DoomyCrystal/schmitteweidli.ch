import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import Link from 'next/link'

const NavLink = ({blok}) => {
    return (
        <div className="nav-item px-1" {...sbEditable(blok)}>
          {(blok.link?.linktype == 'story' && blok.link.story?.url) &&
            <Link href={blok.link?.story?.url}>
              <a className="block px-3 py-2 rounded leading-none font-semibold hover:text-green-800 hover:bg-neutral-100" target={blok.new_tab ? '_blank' : '_self'} rel={blok.new_tab ? 'noreferrer' : undefined}>{blok.name}</a>
            </Link>}
        </div>
    )
}

export default NavLink
