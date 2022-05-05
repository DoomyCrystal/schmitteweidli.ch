import React from 'react'
import { sbEditable } from '@storyblok/storyblok-editable'
import RichTextRenderer from "./helpers/rich-text-renderer";

const TextBlock = ({ blok }) => {
  return (
    <div className="text-block container" {...sbEditable(blok)}>
      <div className="col-span-full md:col-start-3 md:col-span-8">
        {blok.headline && <h2>{blok.headline}</h2>}
        <div className="richtext">
          <RichTextRenderer text={blok.text} />
        </div>
      </div>
    </div>
  )
}

export default TextBlock
