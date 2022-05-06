import React from 'react'
import DynamicComponent from './dynamic-component'
import {sbEditable} from '@storyblok/storyblok-editable'
import Link from 'next/link'
import toSlug from './helpers/to_slug'
import Scrollspy from 'react-scrollspy'

const PageProducts = ({blok}) => {
  return (
    <main {...sbEditable(blok)}>
      {blok.header ? <div className="grid grid-cols-6 lg:grid-cols-12 gap-4 mx-6 mb-6 h-112">
        {blok.header.map(blok => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))}</div> :
        null}
      <div id="kategorien" className="container">
        <div className="col-span-3">
          <div className="categories-nav sticky top-6 p-4 rounded bg-neutral-800">
            <h3 className="h4 px-2 mb-4 text-white">Kategorien</h3>
            <Scrollspy items={blok.body.map(blok => toSlug(blok.headline))} currentClassName="active">
            {blok.body.map(blok => (
              <li className="nav-item py-1 first:pt-0 last:pb-0 border-b border-neutral-600 last:border-transparent text-white" key={blok._uid}><Link href={`#${toSlug(blok.headline)}`}><a className="nav-link block px-2 py-1 rounded hover:bg-neutral-600 transition-colors">{blok.headline}</a></Link></li>
            ))}
            </Scrollspy>
          </div>
        </div>
        {blok.body ?
          <div className="col-span-9">{blok.body.map(blok => (
            <DynamicComponent blok={blok} key={blok._uid} />
          ))}</div> :
          null}
      </div>
    </main>
  )
}

export default PageProducts
