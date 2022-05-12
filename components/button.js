import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import Icon from './helpers/icon'

const Button = ({ blok }) => {
  return (
    <a href={blok.link.cached_url} className="btn -link -icon mt-auto" target={blok.link.linktype == 'story' ? '_self' : '_blank'} rel="noreferrer" {...storyblokEditable(blok)}>
      {blok.icon && <Icon name={blok.icon}/>}
      <span>{blok.text}</span>
    </a>
  )
}

export default Button
