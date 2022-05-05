import React from 'react'
import { sbEditable } from '@storyblok/storyblok-editable'
import RichTextRenderer from "./helpers/rich-text-renderer";

const MilestoneItem = ({ blok, index }) => {
  const even = ((index + 1) % 2 == 0)
  return (
    <li className={`milestone-item grid grid-cols-8 gap-6${!even ? ' text-right' : ''}`} {...sbEditable(blok)}>
      <div className={`relative col-span-4 py-6${even ? ' col-start-5 pl-6' : ' pr-6'}`}>
        <div className={`absolute h-full w-[2px] bg-neutral-200${even ? ' left-0 -ml-3 transform -translate-x-1/2' : ' right-0 -mr-3 transform translate-x-1/2'}`}></div>
        <div className={`absolute rounded-xl${blok.important ? ' w-6 h-6 bg-red-600' : ' w-5 h-5 bg-white border-2 border-neutral-200'}${even ? ' left-0 -ml-3 transform -translate-x-1/2' : ' right-0 -mr-3 transform translate-x-1/2'}`}></div>
        {blok.year && <h3 className={blok.important ? 'h4 text-red-600' : 'h5 mb-2'}>{blok.year}</h3>}
        <div className="richtext">
          <RichTextRenderer text={blok.text} />
        </div>
      </div>
    </li>
  )
}

export default MilestoneItem
