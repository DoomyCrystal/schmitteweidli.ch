import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import RichTextRenderer from "./helpers/rich-text-renderer";

const Intro = ({blok}) => {
    return (
        <div className="intro" {...sbEditable(blok)}>
          {blok.headline && <h3>{blok.headline}</h3>}
          <div className="richtext">
              <RichTextRenderer text={blok.text}/>
          </div>
        </div>
    )
}

export default Intro
