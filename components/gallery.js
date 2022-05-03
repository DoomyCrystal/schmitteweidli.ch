import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import DynamicComponent from './dynamic-component'
import { SRLWrapper } from 'simple-react-lightbox'

const Gallery = ({blok}) => {
  return (
    <div className="container" {...sbEditable(blok)}>
      <div className="col-span-full p-6 rounded-lg bg-neutral-100">
        {blok.headline && <h2>{blok.headline}</h2>}
          <SRLWrapper className="gallery grid grid-cols-12 gap-4">
            {blok.gallery_items.map(blok => (
              <DynamicComponent blok={blok} key={blok._uid} />
            ))}
          </SRLWrapper>
      </div>
    </div>
  )
}

export default Gallery
