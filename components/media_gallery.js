import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import DynamicComponent from './dynamic-component'
import 'photoswipe/dist/photoswipe.css'
import {Gallery} from 'react-photoswipe-gallery'

const MediaGallery = ({blok}) => {
  const galleryOptions = {zoom: false, imageClickAction: false}
  return (
    <div className="container" {...sbEditable(blok)}>
      <div className="col-span-full p-6 rounded-lg bg-neutral-100">
        {blok.headline && <h2>{blok.headline}</h2>}
          <Gallery
            options={galleryOptions}
          >
          <div className="grid grid-cols-12 gap-4">
            {blok.gallery_items.map(blok => (
              <DynamicComponent blok={blok} key={blok._uid} />
            ))}
            </div>
          </Gallery>
      </div>
    </div>
  )
}

export default MediaGallery
