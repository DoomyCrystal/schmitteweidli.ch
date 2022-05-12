import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import Image from 'next/image'

const PictureLarge = ({ blok }) => {
  return (
    <div className="picture-large container" {...storyblokEditable(blok)}>
        <figure className="col-span-full md:col-start-3 md:col-span-8">
          <div className="aspect-w-2 aspect-h-1">
          {blok.picture.filename && (
            <Image
              src={blok.picture.filename}
              alt={blok.picture.alt}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={blok.picture.filename + '/m/50x0'}
              className="rounded-lg bg-neutral-100"
            />
          )}
          </div>
          {blok.picture.alt && <figcaption className="mt-2 italic text-sm">{blok.picture.alt}</figcaption>}
        </figure>
    </div>
  )
}

export default PictureLarge
