import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import Link from 'next/link'

const ProductTeaser = ({blok}) => {
  if (blok.link?.linktype == 'story' && blok.link.story?.url) {
    return (
      <Link href={`#${blok.link.anchor}`}>
        <a className="product-teaser relative col-span-3 first-of-type:col-span-6 first-of-type:row-span-2 flex items-end" {...sbEditable(blok)}>
          {blok.picture && <img className="absolute w-full h-full rounded-lg object-cover" src={blok.picture.filename} alt={blok.picture.alt} title={blok.picture.title}/>}
          {blok.headline && <h2 className="relative m-6 text-white text-shadow-xl">{blok.headline}</h2>}
        </a>
      </Link>
    )
  } else {
    return null
  }
}

export default ProductTeaser
