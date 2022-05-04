import React from 'react'
import DynamicComponent from './dynamic-component'
import {sbEditable} from '@storyblok/storyblok-editable'

const PageGallery = ({blok}) => (
  <main {...sbEditable(blok)}>
    {blok.body ?
      blok.body.map(blok => (
        <DynamicComponent blok={blok} key={blok._uid} />
      )) :
      null}
  </main>
)

export default PageGallery
