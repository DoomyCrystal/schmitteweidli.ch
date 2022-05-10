import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import Link from 'next/link'

const Header = ({blok}) => {
    return (
        <div className="header relative h-112 md:mx-6 mb-6" {...sbEditable(blok)}>
          {blok?.picture?.filename && <img className="absolute col-span-full w-full h-full object-cover md:rounded-lg" src={blok.picture.filename} alt={blok.picture.alt} title={blok.picture.title} width={400} height={265}/>}
          <div className="relative container h-full px-5 py-10 md:p-12">
            <div className="col-span-8 flex flex-col justify-end items-start">
              <h1 className="mb-0 text-white text-shadow-xl">{blok.title}</h1>
              {blok.link.id && blok.link?.linktype === 'story'
                ? <Link href={`/${blok.link?.story?.url}`}><a className="btn -large -primary mt-8" target={blok.new_tab ? '_blank' : '_self'} rel={blok.new_tab ? 'noreferrer' : undefined}>Entdecken</a></Link>
                : null
              }
            </div>
          </div>
        </div>
    )
}

export default Header
