import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import RichTextRenderer from './helpers/rich-text-renderer'
import { useMediaQuery } from 'usehooks-ts'

const MilestoneItem = ({ blok, index }) => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const odd = (index % 2 == 0) && isDesktop
  return (
    <li className={`milestone-item grid grid-cols-8 gap-5 gap-6${odd ? ' text-right' : ''}`} {...storyblokEditable(blok)}>
      <div className={`relative col-span-full md:col-span-4 py-5 md:py-6${odd ? ' pr-6' : ' md:col-start-5 pl-11 md:pl-6'}`}>
        <div className={`absolute h-full w-[2px] bg-neutral-200${odd ? ' right-0 -mr-3 transform translate-x-1/2' : ' left-0 ml-3 md:-ml-3 transform -translate-x-1/2'}`}></div>
        <div className={`absolute rounded-xl${blok.important ? ' w-6 h-6 bg-red-600' : ' w-5 h-5 bg-white border-2 border-neutral-200'}${odd ? ' right-0 -mr-3 transform translate-x-1/2' : ' left-0 ml-3 md:-ml-3 transform -translate-x-1/2'}`}></div>
        {blok.year && <h3 className={blok.important ? 'h4 text-red-600' : 'h5 mb-2'}>{blok.year}</h3>}
        <div className="richtext">
          <RichTextRenderer text={blok.text} />
        </div>
      </div>
    </li>
  )
}

export default MilestoneItem
