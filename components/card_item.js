import React from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import Image from 'next/image'
import RichTextRenderer from './helpers/rich-text-renderer'

const CardItem = ({ blok }) => {
  return (
    <div className="col-span-full md:col-span-4 flex flex-col p-6 rounded-lg bg-neutral-100" {...storyblokEditable(blok)}>
      {blok.picture &&
        <div className="mb-4">
          <Image src={blok.picture.filename} alt={blok.picture.alt} layout="fixed" width={120} height={120}/>
        </div>}
      {blok.headline && <h2 className="h4">{blok.headline}</h2>}
      {blok.text && <div className={`richtext${blok.button.length && ' mb-4'}`}>
        <RichTextRenderer text={blok.text} />
      </div>}
      {blok.button.map(blok => (
        <StoryblokComponent blok={blok} key={blok._uid}/>
      ))}
    </div>
  )
}

export default CardItem
