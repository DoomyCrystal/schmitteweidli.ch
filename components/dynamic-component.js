import React from 'react'

// content types
import Page from './page'
import PageAnimals from './page_animals'
import PageProducts from './page_products'
import PageGallery from './page_gallery'
import PageAboutUs from './page_about_us'

// normal components
import NavLink from './layout/nav_link'
import Intro from './intro'
import Header from './header'
import OpeningHours from './opening_hours'
import Events from './events'
import EventItem from './event_item'
import Button from './button'
import Animals from './animals'
import Animal from './animal'
import ProductLink from './product_link'
import ProductTeaser from './product_teaser'
import Category from './category'
import Product from './product'
import MediaGallery from './media_gallery'
import GalleryItem from './gallery_item'
import TextBlock from './text_block'
import Milestones from './milestones'
import MilestoneItem from './milestone_item'
import Cards from './cards'
import CardItem from './card_item'
import ContactItem from './layout/contact_item'
import FooterItem from './layout/footer_item'

// resolve Storyblok components to Next.js components
const Components = {
  page: Page,
  page_animals: PageAnimals,
  page_products: PageProducts,
  page_gallery: PageGallery,
  page_about_us: PageAboutUs,
  nav_link: NavLink,
  header: Header,
  intro: Intro,
  opening_hours: OpeningHours,
  events: Events,
  event_item: EventItem,
  button: Button,
  animals: Animals,
  animal: Animal,
  product_link: ProductLink,
  product_teaser: ProductTeaser,
  category: Category,
  product: Product,
  media_gallery: MediaGallery,
  gallery_item: GalleryItem,
  text_block: TextBlock,
  milestones: Milestones,
  milestone_item: MilestoneItem,
  cards: Cards,
  card_item: CardItem,
  contact_item: ContactItem,
  footer_item: FooterItem,
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
