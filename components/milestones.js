import React from 'react'
import { sbEditable } from '@storyblok/storyblok-editable'
import RichTextRenderer from "./helpers/rich-text-renderer"
import MilestoneItem from './milestone_item'
import { useState } from 'react'

const Milestones = ({ blok }) => {
  const [numberOfItems, setNumber] = useState(4)
  const loadMore = (e) => setNumber(numberOfItems + 6)

  return (
    <div className="container" {...sbEditable(blok)}>
      <div className="col-span-full md:col-start-3 md:col-span-8">
        {blok.headline && <h2>{blok.headline}</h2>}
        <div className="richtext">
          <RichTextRenderer text={blok.text} />
        </div>
        <ul>
          {blok.milestones.slice(0, numberOfItems).map((blok, index) => (
            <MilestoneItem blok={blok} key={blok._uid} index={index} />
          ))}
        </ul>
      </div>
      {blok.milestones.length > numberOfItems &&
        <div className="col-span-full relative flex justify-center">
          <div className="absolute w-1 h-6 -mt-6 bg-gradient-to-t from-white"></div>
          <button type="button" onClick={loadMore} className="btn -secondary">Mehr anzeigen</button>
        </div>
      }
    </div>
  )
}

export default Milestones
