import React from 'react'
import DynamicComponent from './dynamic-component'
import {sbEditable} from '@storyblok/storyblok-editable'
import RichTextRenderer from "./helpers/rich-text-renderer"
import toSlug from './helpers/to_slug'

const Category = ({blok}) => {
  return (
    <div id={blok.headline && toSlug(blok.headline)} className="col-span-9" {...sbEditable(blok)}>
      {blok.picture && <div className="aspect-w-2 aspect-h-1 mb-6">
        <img className="w-full h-full rounded-lg object-cover" src={blok.picture.filename} alt={blok.picture.alt} title={blok.picture.title}/>
      </div>}
      {blok.headline && <h2 className="text-center">{blok.headline}</h2>}
      {blok.text && <div className="richtext text-center">
        <RichTextRenderer text={blok.text}/>
      </div>}
      {blok.products && <ul className="grid grid-cols-9 gap-6 my-6">
        {blok.products.map(blok => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))}
      </ul>}
    </div>
  )
}

export default Category
