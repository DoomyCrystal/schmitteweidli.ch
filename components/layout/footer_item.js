import React from 'react'
import { sbEditable } from '@storyblok/storyblok-editable'

const FooterItem = ({ blok }) => {
  if (blok.link.cached_url) {
    return (
      <a href={blok.link.cached_url} className="col-span-3 group" {...sbEditable(blok)}>
        {blok.headline && <h4 className="h5 text-white group-hover:underline">{blok.headline}</h4>}
        {blok.text && <p className="text-sm text-white">{blok.text}</p>}
      </a>
    )
  } else {
    return (
      <div className="col-span-3 last:col-start-10 text-white" {...sbEditable(blok)}>
        {blok.headline && <h4 className="h5 text-white">{blok.headline}</h4>}
        {blok.text && <p className="text-sm text-white">{blok.text}</p>}
      </div>
    )
  }
}

export default FooterItem
