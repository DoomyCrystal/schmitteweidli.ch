import React from 'react'
import { sbEditable } from '@storyblok/storyblok-editable'
import DynamicComponent from './dynamic-component.js'
import RichTextRenderer from './helpers/rich-text-renderer'

const CardItem = ({ blok }) => {
  return (
    <div className="col-span-full md:col-span-4 flex flex-col p-6 rounded-lg bg-neutral-100" {...sbEditable(blok)}>
      {blok.picture && <img className="block mb-4" src={blok.picture.filename} width={120} height={120}/>}
      {blok.headline && <h2 className="h4">{blok.headline}</h2>}
      {blok.text && <div className={`richtext${blok.button.length && ' mb-4'}`}>
        <RichTextRenderer text={blok.text} />
      </div>}
      {blok.button.map(blok => (
        <DynamicComponent blok={blok} key={blok._uid}/>
      ))}
    </div>
  )
}

export default CardItem
