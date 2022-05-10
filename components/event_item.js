import React from 'react'
import { sbEditable } from '@storyblok/storyblok-editable'
import DynamicComponent from './dynamic-component.js'
import Icon from './helpers/icon.js'
import dayjs from 'dayjs'
import 'dayjs/locale/de'

const EventItem = ({ blok }) => {
  return (
    <li className="event col-span-full md:col-span-6 xl:col-span-4 p-6 rounded-lg bg-neutral-100" {...sbEditable(blok)}>
      <div className="flex gap-3 pb-4">
        <div className="flex flex-col justify-center min-w-20 p-4 text-center text-white font-bold rounded bg-red-600">
          <span>{dayjs(blok.date_start).format('dd')}</span>
          <span className="block text-4xl">{dayjs(blok.date_start).format('D.')}</span>
          <span>{dayjs(blok.date_start).locale('de-ch').format('MMM')}</span>
        </div>
        {blok ?.picture ?.filename && <div className="col-span-3">
          <img src={blok.picture.filename} alt={blok.picture.alt} title={blok.picture.title} className="w-full h-full object-cover rounded" width={400} height={265} />
        </div>}
      </div>
      <div>
        {blok.headline && <h4>{blok.headline}</h4>}
        {blok.date_start &&
          <div className="flex gap-2">
            <Icon name="time-fill" className="text-red-600" />
            <div>{dayjs(blok.date_start).format('H.mm')}
              {blok.date_end && <span> – {dayjs(blok.date_end).format('H.mm')} Uhr</span>}</div>
          </div>}
        {blok.location &&
          <div className={`flex gap-2 mt-1${blok.button?.length ? ' mb-4' : ''}`}>
            <Icon name="map-pin-fill" className="text-red-600" />
            <div>{blok.location}</div>
          </div>}
        {blok.button?.map(blok => (
          <DynamicComponent blok={blok} key={blok._uid}/>
        ))}
      </div>
    </li>
  )
}

export default EventItem
