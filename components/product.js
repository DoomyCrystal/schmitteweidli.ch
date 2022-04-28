import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'

const Product = ({blok}) => {
    return (
        <li className="product col-span-3" {...sbEditable(blok)}>
          <div className="aspect-w-1 aspect-h-1 mb-4">
            {blok.picture && <img className="w-full h-full rounded object-cover" src={blok.picture.filename} alt={blok.picture.alt} title={blok.picture.title}/>}
          </div>
          <div>
            {blok.name && <h5 className="inline">{blok.name}</h5>}
            {blok.amount && <span>{` (${blok.amount})`}</span>}
            {blok.price && <div>{`Fr. ${Number(blok.price) % 1 == 0 ? blok.price + '.–' : Number(blok.price).toFixed(2) }`}</div>}
          </div>
        </li>
    )
}

export default Product
