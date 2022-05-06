import React from 'react'
import { sbEditable } from '@storyblok/storyblok-editable'
import DynamicComponent from '../dynamic-component.js'

const Footer = ({ blok }) => {
  return (
    <div className="m-6 mt-0 rounded-lg bg-red-800" {...sbEditable(blok)}>
      <div className="container py-12">
        {blok.footer.map(blok => (
          <DynamicComponent blok={blok} key={blok._uid}/>
        ))}
      </div>
    </div>
  )
}

export default Footer
