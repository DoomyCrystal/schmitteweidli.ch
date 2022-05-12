import React from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import 'photoswipe/dist/photoswipe.css'
import {Gallery} from 'react-photoswipe-gallery'

const MediaGallery = ({blok}) => {
  const iconArrowLeft = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 24 24" width="24" height="24"><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/></svg>'
  const iconClose = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 24 24" width="24" height="24"><path d="m12 10.586 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>'
  const options = {
    zoom: false,
    imageClickAction: false,
    arrowPrevSVG: iconArrowLeft,
    arrowNextSVG: iconArrowLeft,
    closeSVG: iconClose,
    bgOpacity: 1,
  }
  return (
    <div className="container" {...storyblokEditable(blok)}>
      <div className="col-span-full p-6 rounded-lg bg-neutral-100">
        {blok.headline && <h2>{blok.headline}</h2>}
          <Gallery
            withCaption
            options={options}
          >
          <div className="grid grid-cols-12 gap-4">
            {blok.gallery_items.map(blok => (
              <StoryblokComponent blok={blok} key={blok._uid} />
            ))}
            </div>
          </Gallery>
      </div>
    </div>
  )
}

export default MediaGallery
