import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import DynamicComponent from './dynamic-component'

const Animals = ({blok}) => {
    return (
        <div className="animals container" {...sbEditable(blok)}>
          <div className="col-span-full">
            {blok.headline && <h1 className="text-center">{blok.headline}</h1>}
            <ul className="grid grid-cols-12 gap-5 md:gap-6" {...sbEditable(blok)}>
              {blok.animals.map(blok => (
                <DynamicComponent blok={blok} key={blok._uid}/>
              ))}
            </ul>
          </div>
        </div>
    )
}

export default Animals
