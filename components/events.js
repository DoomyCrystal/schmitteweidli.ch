import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import DynamicComponent from './dynamic-component'

const Events = ({blok}) => {
    return (
        <div className="events container" {...sbEditable(blok)}>
          <div className="col-span-full">
            {blok.headline && <h2 className="text-center">{blok.headline}</h2>}
            <ul className="grid grid-cols-12 gap-6" {...sbEditable(blok)}>
              {blok.events.map(blok => (
                <li className="col-span-full md:col-span-6 xl:col-span-4" key={blok._uid}><DynamicComponent blok={blok}/></li>
              ))}
            </ul>
          </div>
        </div>
    )
}

export default Events
