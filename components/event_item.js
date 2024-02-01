import React from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import Image from 'next/image'
import Icon from './helpers/icon.js'

const EventItem = ({ blok }) => {
  const dateStart = new Date(blok.date_start)
  const dateEnd = new Date(blok.date_end)
  return (
    <li className="event col-span-full md:col-span-6 xl:col-span-4 p-6 rounded-lg bg-neutral-100" {...storyblokEditable(blok)}>
      <div className="flex gap-3 pb-4">
        <div className="flex flex-col justify-center min-w-20 p-4 text-center text-white font-bold rounded bg-red-600">
          <span>{dateStart.toLocaleDateString('de-CH', { weekday: 'short' })}</span>
          <span className="block text-4xl">{dateStart.toLocaleDateString('de-CH', { day: 'numeric' })}</span>
          <span>{dateStart.toLocaleDateString('de-CH', { month: 'short' })}</span>
        </div>
        {blok.picture.filename &&
          <div className="w-full aspect-w-2 aspect-h-1">
            <Image
              src={blok.picture.filename}
              alt={blok.picture.alt}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={blok.picture.filename + '/m/50x0'}
              className="rounded bg-neutral-200"
            />
          </div>}
      </div>
      <div>
        {blok.headline && <h4>{blok.headline}</h4>}
        {blok.text && <p className="richtext mb-4 whitespace-pre-line">{blok.text}</p>}
        {blok.date_start &&
          <div className="flex gap-2">
            <Icon name="time-fill" className="text-red-600" />
            <div>{dateStart.toLocaleTimeString('de-CH', { timeStyle: 'short' })}
              {dateEnd && <span>–{dateEnd.toLocaleTimeString('de-CH', { timeStyle: 'short' })} Uhr</span>}</div>
          </div>}
        {blok.location &&
          <div className={`flex gap-2 mt-1${blok.button?.length ? ' mb-4' : ''}`}>
            <Icon name="map-pin-fill" className="text-red-600" />
            <div>{blok.location}</div>
          </div>}
        {blok.button?.map(blok => (
          <StoryblokComponent blok={blok} key={blok._uid}/>
        ))}
      </div>
    </li>
  )
}

export default EventItem
