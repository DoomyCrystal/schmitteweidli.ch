import React from 'react'
import Page from './page'
import Navigation from './layout/navigation'
import NavLinks from './nav_links'
import NavLink from './nav_link'
import Intro from './intro'
import Header from './header'
import OpeningHours from './opening_hours'
import Events from './events'
import Event from './event'

// resolve Storyblok components to Next.js components
const Components = {
  page: Page,
  navigation: Navigation,
  nav_links: NavLinks,
  nav_link: NavLink,
  header: Header,
  intro: Intro,
  opening_hours: OpeningHours,
  events: Events,
  event: Event,
}

const DynamicComponent = ({blok}) => {
  // check if component is defined above
  if (typeof Components[blok?.component] !== 'undefined') {
    const Component = Components[blok?.component]
    return <Component blok={blok} key={blok?._uid} />
  }

  // fallback if the component doesn't exist
  return (<p>The component <strong>{blok?.component}</strong> has not been created yet.</p>)
}

export default DynamicComponent
