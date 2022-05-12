import React, { useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import Link from 'next/link'
import Logo from './logo'
import Icon from '../helpers/icon'
import NavLinks from './nav_links'

const MainMenu = ({ blok, currentStory }) => {
  const [isOpen, setOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  function toggleMenu() {
    setOpen(!isOpen)
  }
  return (
    <nav className={`navbar container absolute md:relative m-2 md:m-auto rounded-lg bg-white overflow-hidden z-10${isOpen ? ' shadow-lg' : ''}`}>
      <div className="col-span-full block md:flex md:items-end">
        <div className="flex justify-between">
            <Link href="/">
                <a><Logo/></a>
            </Link>
            <button className="btn -icon -link md:hidden" type="button" onClick={toggleMenu}>
              <span>Menü</span>
              <Icon name={isOpen ? 'close-line' : 'menu-line'}/>
            </button>
          </div>
          {(isOpen || isDesktop) && <NavLinks blok={blok} currentStory={currentStory} isOpen={isOpen} />}
      </div>
    </nav>
  )
}

export default MainMenu
