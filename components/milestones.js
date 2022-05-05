import React from 'react'
import { sbEditable } from '@storyblok/storyblok-editable'
import RichTextRenderer from "./helpers/rich-text-renderer"
import MilestoneItem from './milestone_item'

const Milestones = ({ blok }) => {
  return (
    <div className="container" {...sbEditable(blok)}>
      <div className="col-span-full md:col-start-3 md:col-span-8">
        {blok.headline && <h2>{blok.headline}</h2>}
        <div className="richtext">
          <RichTextRenderer text={blok.text} />
        </div>
        <ul>
          {blok.milestones.map((blok, index) => (
            <MilestoneItem blok={blok} key={blok._uid} index={index} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Milestones
