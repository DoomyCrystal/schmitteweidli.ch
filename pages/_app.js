import '../styles/application.scss'
import { storyblokInit, apiPlugin } from "@storyblok/react";

// content types
import Global from '../components/layout/global'
import PageHome from '../components/page_home'
import PageAnimals from '../components/page_animals'
import PageProducts from '../components/page_products'
import PageGallery from '../components/page_gallery'
import PageAboutUs from '../components/page_about_us'
import PageArticle from '../components/page_article'
import PageSimple from '../components/page_simple'

// normal components
import NavLink from '../components/layout/nav_link'
import Intro from '../components/intro'
import Header from '../components/header'
import OpeningHours from '../components/opening_hours'
import Events from '../components/events'
import EventItem from '../components/event_item'
import Button from '../components/button'
import Animals from '../components/animals'
import Animal from '../components/animal'
import ProductLink from '../components/product_link'
import ProductTeaser from '../components/product_teaser'
import Category from '../components/category'
import Product from '../components/product'
import MediaGallery from '../components/media_gallery'
import GalleryItem from '../components/gallery_item'
import TextBlock from '../components/text_block'
import Milestones from '../components/milestones'
import MilestoneItem from '../components/milestone_item'
import PictureLarge from '../components/picture_large'
import Cards from '../components/cards'
import CardItem from '../components/card_item'
import ContactItem from '../components/layout/contact_item'
import FooterItem from '../components/layout/footer_item'

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  // bridge: true,
  use: [apiPlugin],
  components: {
    global: Global,
    page_home: PageHome,
    page_animals: PageAnimals,
    page_products: PageProducts,
    page_gallery: PageGallery,
    page_about_us: PageAboutUs,
    page_article: PageArticle,
    page_simple: PageSimple,
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
    picture_large: PictureLarge,
    cards: Cards,
    card_item: CardItem,
    contact_item: ContactItem,
    footer_item: FooterItem,
  },
})

function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />
}

export default MyApp
