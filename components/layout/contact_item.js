import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import Image from 'next/image'
import Link from 'next/link'

const ContactItem = ({blok}) => {
    return (
        <li className="contact-item col-span-full md:col-span-6 xl:col-span-4 flex p-4 rounded border-2 border-neutral-200" {...sbEditable(blok)}>
          {blok.picture &&
            <div className="relative w-16 h-16 mr-4">
              <Image src={blok.picture.filename} alt={blok.picture.alt} title={blok.picture.title} layout="fill" objectFit="cover"/>
            </div>}
          <div>
            {blok.headline && <h5>{blok.headline}</h5>}
            {(blok.link?.linktype == 'story' && blok.link.story?.url) && <Link href={blok.link.story.url}><a className="text-green-800 underline" target={blok.new_tab ? '_blank' : '_self'} rel={blok.new_tab ? 'noreferrer' : undefined}>{blok.link_text}</a></Link>}
            {(blok.link?.linktype == 'url' && blok.link?.url) && <Link href={blok.link.url}><a className="text-green-800 underline" target={blok.new_tab ? '_blank' : '_self'} rel={blok.new_tab ? 'noreferrer' : undefined}>{blok.link_text}</a></Link>}
            {(blok.link?.linktype == 'email' && blok.link?.email) && <Link href={`mailto:${blok.link.email}`}><a className="text-green-800 underline" target={blok.new_tab ? '_blank' : '_self'} rel={blok.new_tab ? 'noreferrer' : undefined}>{blok.link_text}</a></Link>}
          </div>
        </li>
    )
}

export default ContactItem
