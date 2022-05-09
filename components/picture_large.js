import React from 'react'
import { sbEditable } from '@storyblok/storyblok-editable'

const PictureLarge = ({ blok }) => {
  return (
    <div className="picture-large container" {...sbEditable}>
        <figure className="col-start-3 col-span-8">
          <div className="aspect-w-2 aspect-h-1">
            {blok.picture && <img src={blok.picture.filename} alt={blok.picture.alt} className="w-full h-full rounded-lg object-cover"/>}
          </div>
          {blok.picture.alt && <figcaption className="mt-2 italic text-sm">{blok.picture.alt}</figcaption>}
        </figure>
    </div>
  )
}

export default PictureLarge
