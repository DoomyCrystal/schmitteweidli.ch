import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import Link from 'next/link'
import Icon from './helpers/icon.js'

const ProductLink = ({blok}) => {
    return (
        <div className="product_link" {...sbEditable(blok)}>
          {blok.link ? <Link href={blok.link.url}><a className="flex gap-2 text-green-800"><Icon name="arrow-right-fill"/>{blok.link_text}</a></Link> : <div className="flex gap-2"><Icon name="arrow-right-s-line"/>{blok.link_text}</div>}
        </div>
    )
}

export default ProductLink
