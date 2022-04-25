import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import Image from "next/image"

const Event = ({blok}) => {
    return (
        <div className="event" {...sbEditable(blok)}>
          {blok?.picture?.filename && <div className="picture">
              <Image src={blok.picture.filename} alt={blok.picture.alt} title={blok.picture.title} className="w-full" width={400} height={265}/>
          </div>}
          {blok.headline && <h1>{blok.headline}</h1>}
          {blok.date_start && <div>{blok.date_start}</div>}
          {blok.date_end && <div>{blok.date_end}</div>}
          {blok.location && <div>{blok.location}</div>}
        </div>
    )
}

export default Event
