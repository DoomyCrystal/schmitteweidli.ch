import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import Link from 'next/link'
import Icon from './layout/icon'
import {Item} from 'react-photoswipe-gallery'

const GalleryItem = ({blok}) => {
  const url = blok.picture.filename + '/m/'
    return (
      <Item
        original={url}
        thumbnail={url}
        width={url.split('/')[5].split('x')[0]}
        height={url.split('/')[5].split('x')[1]}
      >
        {({ ref, open }) => (
          <a href="javascript:void(0);" className="relative col-span-4 md:col-span-3 lg:col-span-2 aspect-w-1 aspect-h-1 group" {...sbEditable(blok)}>
            {blok.picture && <img className="w-full h-full rounded object-cover" ref={ref} onClick={open} src={url + '400x400'} alt={blok.picture.name ? blok.picture.name : blok.picture.alt} title={blok.picture.title}/>}
            <Icon name="zoom-in-fill" className="absolute flex items-end w-auto h-auto m-4 text-lg text-white text-shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity"/>
          </a>
        )}
      </Item>
    )
}

export default GalleryItem
