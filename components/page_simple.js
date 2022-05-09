import React from 'react'
import { sbEditable } from '@storyblok/storyblok-editable'
import DynamicComponent from './dynamic-component'

const PageArticle = ({ blok, story }) => {
  return (
    <main {...sbEditable}>
      {story.name && <div className="container pt-12 pb-0">
        <div className="col-start-3 col-span-8">
          <h1>{story.name}</h1>
        </div>
      </div>}
      {blok.body.map(blok => (
        <DynamicComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  )
}

export default PageArticle
