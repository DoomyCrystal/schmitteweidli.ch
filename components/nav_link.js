import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import Link from 'next/link'

const NavLink = ({blok}) => {
    return (
        <div className="header" {...sbEditable(blok)}>
          {blok.link?.linktype === 'story'
            ? <Link href={`/${blok.link?.story?.url}`}><a target={blok.new_tab ? '_blank' : '_self'} rel={blok.new_tab ? 'noreferrer' : undefined}>{blok.name}</a></Link>
            // eslint-disable-next-line react/jsx-no-target-blank
            : <a href={blok.link?.cached_url} target={blok.new_tab ? '_blank' : '_self'} rel={blok.new_tab ? 'noreferrer' : undefined}>{blok.name}</a>
        }
        </div>
    )
}

export default NavLink
