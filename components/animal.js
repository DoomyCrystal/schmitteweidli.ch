import React from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import Image from 'next/image'
import RichTextRenderer from "./helpers/rich-text-renderer";

const Animal = ({ blok }) => {
  return (
    <li className="animal col-span-full lg:col-span-6 flex flex-col p-6 rounded-lg bg-neutral-100" {...storyblokEditable(blok)}>
      {blok.picture?.filename && (
        <div className="aspect-w-3 aspect-h-2 mb-6">
          <Image
            src={blok.picture.filename}
            alt={blok.picture.alt}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={blok.picture.filename + '/m/50x0'}
            className="rounded bg-neutral-200"
          />
        </div>
      )}
      {blok.headline && <h2>{blok.headline}</h2>}
      {blok.text && <div className="richtext mb-8">
        <RichTextRenderer text={blok.text} />
      </div>}
      <ul className="relative mt-auto p-4 pt-6 rounded border-2 border-neutral-800">
        {blok.product_links_headline && <h3 className="h5 absolute inline-block -mt-10 px-2 py-1 rounded text-white bg-neutral-800">{blok.product_links_headline}</h3>}
        {blok.product_links.map(blok => (
          <li className="" key={blok._uid}><StoryblokComponent blok={blok} /></li>
        ))}
      </ul>
    </li>
  )
}

export default Animal
