import React from 'react'
import DynamicComponent from './dynamic-component'
import {sbEditable} from '@storyblok/storyblok-editable'

const PageHome = ({blok}) => (
  <main {...sbEditable(blok)}>
    {blok.header ?
      blok.header.map(blok => (
        <DynamicComponent blok={blok} key={blok._uid} />
      )) :
      null}
    {blok.body ?
      blok.body.map(blok => (
        <DynamicComponent blok={blok} key={blok._uid} />
      )) :
      null}
  </main>
)

export default PageHome
