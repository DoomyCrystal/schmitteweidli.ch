import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import Link from 'next/link'
import Icon from './layout/icon'

const GalleryItem = ({blok}) => {
    return (
        <a href={blok.picture.filename} className="contact-item relative col-span-4 md:col-span-3 lg:col-span-2 aspect-w-1 aspect-h-1 group" {...sbEditable(blok)}>
          {blok.picture && <img className="w-full h-full rounded object-cover" src={blok.picture.filename} alt={blok.picture.alt} title={blok.picture.title}/>}
          <Icon name="zoom-in-fill" className="absolute flex items-end w-auto h-auto m-4 text-lg text-white text-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"/>
        </a>
    )
}

export default GalleryItem
