import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import RichTextRenderer from "./helpers/rich-text-renderer";

const Intro = ({blok}) => {
    return (
        <div className="opening-hours container" {...sbEditable(blok)}>
          <div className ="col-span-full md:col-start-4 md:col-span-6">
            {blok.headline && <h2 className="text-center">{blok.headline}</h2>}
            <div className="richtext p-6 rounded-lg bg-neutral-800 text-neutral-100">
                <RichTextRenderer text={blok.text}/>
            </div>
          </div>
        </div>
    )
}

export default Intro
