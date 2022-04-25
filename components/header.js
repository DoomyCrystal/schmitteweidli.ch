import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import Image from "next/image"
import Link from 'next/link'

const Header = ({blok}) => {
    return (
        <div className="header" {...sbEditable(blok)}>
          {blok?.picture?.filename && <div className="picture">
              <Image src={blok.picture.filename} alt={blok.picture.alt} title={blok.picture.title} className="w-full" width={400} height={265}/>
          </div>}
          {blok.title && <h1>{blok.title}</h1>}
          {blok.link?.linktype === 'story'
            ? <Link href={`/${blok.link?.story?.url}`}><a target={blok.new_tab ? '_blank' : '_self'} rel={blok.new_tab ? 'noreferrer' : undefined}>Entdecken</a></Link>
            // eslint-disable-next-line react/jsx-no-target-blank
            : <a href={blok.link?.cached_url} target={blok.new_tab ? '_blank' : '_self'} rel={blok.new_tab ? 'noreferrer' : undefined}>Entdecken</a>
        }
        </div>
    )
}

export default Header
