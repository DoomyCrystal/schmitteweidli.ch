import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import Link from 'next/link'
import Icon from './layout/icon.js'
import dayjs from 'dayjs'
import 'dayjs/locale/de'

const Event = ({blok}) => {
    return (
        <div className="event p-6 rounded-lg bg-neutral-100" {...sbEditable(blok)}>
          <div className="flex gap-3 pb-4">
            <div className="flex flex-col justify-center min-w-20 p-4 text-center text-white font-semibold rounded bg-red-600">
              <span>{dayjs(blok.date_start).format('dd')}</span>
              <span className="block text-4xl">{dayjs(blok.date_start).format('D.')}</span>
              <span>{dayjs(blok.date_start).locale('de-ch').format('MMM')}</span>
            </div>
            {blok?.picture?.filename && <div className="col-span-3">
                <img src={blok.picture.filename} alt={blok.picture.alt} title={blok.picture.title} className="w-full h-full object-cover rounded" width={400} height={265}/>
            </div>}
          </div>
          <div>
            {blok.headline && <h4>{blok.headline}</h4>}
            {blok.date_start &&
              <div className="flex gap-3">
                <Icon name="time-fill" className="text-red-600"/>
                <div>{dayjs(blok.date_start).format('H.mm')}
                {blok.date_end && <span> – {dayjs(blok.date_end).format('H.mm')} Uhr</span>}</div>
              </div>}
            {blok.location &&
              <div className="flex gap-3 mt-1">
                <Icon name="map-pin-fill" className="text-red-600"/>
                <div>{blok.location}</div>
              </div>}
            {blok.button_link &&
              <a className="btn mt-4" href={blok.button_link?.url} target={blok.new_tab ? '_blank' : '_self'} rel={blok.new_tab ? 'noreferrer' : undefined}>{blok.button_label}</a>}
          </div>
        </div>
    )
}

export default Event
