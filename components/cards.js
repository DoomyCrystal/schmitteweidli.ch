import React from 'react'
import { sbEditable } from '@storyblok/storyblok-editable'
import DynamicComponent from './dynamic-component.js'

const Cards = ({ blok }) => {
  return (
    <div className="container" {...sbEditable(blok)}>
      <div className="col-span-full md:col-start-3 md:col-span-8 grid grid-cols-8 gap-6">
        {blok.cards.map(blok => (
          <DynamicComponent blok={blok} key={blok._uid}/>
        ))}
      </div>
    </div>
  )
}

export default Cards
