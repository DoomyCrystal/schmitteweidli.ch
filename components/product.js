import React from 'react'
import { sbEditable } from '@storyblok/storyblok-editable'
import Image from 'next/image'

const Product = ({ blok }) => {
  return (
    <li className="product col-span-4 md:col-span-3" {...sbEditable(blok)}>
      {blok.picture && (
        <div className="aspect-w-1 aspect-h-1 mb-4">
          <Image
            src={blok.picture.filename}
            alt={blok.picture.alt}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={blok.picture.filename + '/m/50x0'}
            className="rounded bg-neutral-100"
          />
        </div>
      )}
      <div>
        {blok.name && <h5 className="inline">{blok.name}</h5>}
        {blok.amount && <span>{` (${blok.amount})`}</span>}
        {blok.price && <div>{`Fr. ${Number(blok.price) % 1 == 0 ? blok.price + '.–' : Number(blok.price).toFixed(2)}`}</div>}
      </div>
    </li>
  )
}

export default Product
