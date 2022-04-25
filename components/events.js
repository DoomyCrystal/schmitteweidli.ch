import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import DynamicComponent from './dynamic-component'

const Events = ({blok}) => {
    return (
        <div className="events" {...sbEditable(blok)}>
          {blok.headline && <h1>{blok.headline}</h1>}
          <ul {...sbEditable(blok)}>
            {blok.events.map(blok => (
              <li key={blok._uid}><DynamicComponent blok={blok}  /></li>
            ))}
          </ul>
        </div>
    )
}

export default Events
