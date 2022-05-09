import React from 'react'
import { sbEditable } from '@storyblok/storyblok-editable'
import DynamicComponent from './dynamic-component'

const PageArticle = ({ blok }) => {
  return (
    <main {...sbEditable}>
      {blok.header.map(blok => (
        <DynamicComponent blok={blok} key={blok._uid} />
      ))}
      {blok.body.map(blok => (
        <DynamicComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  )
}

export default PageArticle
