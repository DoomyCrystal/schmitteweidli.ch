import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import Link from 'next/link'
import Image from 'next/image'

const ProductTeaser = ({blok, index}) => {
  const isFirst = index == 0
  if (blok.link?.linktype == 'story' && blok.link.story?.url) {
    return (
      <Link href={`#${blok.link.anchor}`}>
        <a className={`product-teaser relative flex items-end${isFirst ? ' col-span-6 row-span-2 -mx-6 md:mx-0 h-112 md:h-auto' : ' col-span-3'}`} {...sbEditable(blok)}>
          {blok.picture && (
            <Image
              src={blok.picture.filename}
              alt={blok.picture.alt}
              layout="fill"
              objectFit="cover"
              priority={isFirst ? 'true' : 'false'}
              placeholder="blur"
              blurDataURL={blok.picture.filename + '/m/50x0'}
              className={`bg-neutral-100${isFirst ? ' md:rounded-lg' : ' rounded-lg'}`}
            />
          )}
          {blok.headline && <h2 className="relative m-6 text-white text-shadow-xl">{blok.headline}</h2>}
        </a>
      </Link>
    )
  } else {
    return null
  }
}

export default ProductTeaser
