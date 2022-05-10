import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import Link from 'next/link'

const ProductTeaser = ({blok, index}) => {
  const isFirst = index == 0
  if (blok.link?.linktype == 'story' && blok.link.story?.url) {
    return (
      <Link href={`#${blok.link.anchor}`}>
        <a className={`product-teaser relative flex items-end${isFirst ? ' col-span-6 row-span-2 -mx-6 md:mx-0 h-112 md:h-auto' : ' col-span-3'}`} {...sbEditable(blok)}>
          {blok.picture && <img className={`absolute w-full h-full object-cover${isFirst ? ' md:rounded-lg' : ' rounded-lg'}`} src={blok.picture.filename} alt={blok.picture.alt} title={blok.picture.title}/>}
          {blok.headline && <h2 className="relative m-6 text-white text-shadow-xl">{blok.headline}</h2>}
        </a>
      </Link>
    )
  } else {
    return null
  }
}

export default ProductTeaser
