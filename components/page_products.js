import React from 'react'
import DynamicComponent from './dynamic-component'
import ProductTeaser from './product_teaser'
import { sbEditable } from '@storyblok/storyblok-editable'
import CategoriesNav from './layout/categories_nav'
import { useMediaQuery } from 'usehooks-ts'

const PageProducts = ({ blok }) => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  return (
    <main {...sbEditable(blok)}>
      {blok.header ? <div className="grid grid-cols-6 lg:grid-cols-12 gap-4 mx-5 md:mx-6 mb-5 md:mb-6 md:h-112">
        {blok.header.map((blok, index) => (
          <ProductTeaser blok={blok} key={blok._uid} index={index} />
        ))}</div> :
        null}
      <div id="kategorien" className="container">
        {isDesktop &&
          <div className="col-span-4 lg:col-span-3 mb-5">
            <CategoriesNav blok={blok}/>
          </div>
        }
        {blok.body ?
          <div className="col-span-full md:col-span-8 lg:col-span-9">{blok.body.map(blok => (
            <DynamicComponent blok={blok} key={blok._uid} />
          ))}</div> :
          null}
        {!isDesktop && <CategoriesNav blok={blok}/>}
      </div>
    </main>
  )
}

export default PageProducts
