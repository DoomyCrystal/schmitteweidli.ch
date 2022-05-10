import React from 'react'
import Link from 'next/link'
import Scrollspy from 'react-scrollspy'
import toSlug from '../helpers/to_slug'

const CategoriesNav = ({ blok }) => {
  return (
    <div className="categories-nav col-span-full sticky bottom-2 md:top-6 -mx-3 md:mx-0 px-1 py-2 md:p-4 rounded-lg bg-neutral-800 overflow-auto z-10">
      <h3 className="h4 hidden md:block px-2 mb-4 text-white">Kategorien</h3>
      <Scrollspy items={blok.body.map(blok => toSlug(blok.headline))} className="flex md:block flex-nowrap" currentClassName="active">
        {blok.body.map(blok => (
          <li className="nav-item py-1 px-2 md:px-0 first:md:pt-0 last:pb-0 border-r md:border-r-0 md:border-b border-neutral-600 last:border-transparent text-white" key={blok._uid}>
            <Link href={`#${toSlug(blok.headline)}`}><a className="nav-link block px-2 py-1 rounded hover:md:bg-neutral-600 transition-colors">{blok.headline}</a></Link>
          </li>
        ))}
      </Scrollspy>
    </div>
  )
}

export default CategoriesNav
