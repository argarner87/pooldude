
import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Spin as Hamburger } from "hamburger-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Menu from "./menu"

const Layout = ({ children }) => {
  
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function handleMenu() {
    console.log("menu button pressed")
    setMenuIsOpen(!menuIsOpen)
    console.log(`menuIsOpen = ${menuIsOpen}`)
    return <Menu />
  };

  return (
    <div className="layout">
        <Head>

        </Head>
        {/* <body> */}
          <header className='header'>
            <div className="header-logobar">
              <Link style={{textDecoration: 'none'}} href='/'>
                <h1 className="header-logo">Pool Dude</h1>
              </Link>
              <button className="menu-button" onClick={handleMenu}>
                <div className={menuIsOpen ? "menu-icon_open" : "menu-icon"} />
              </button>
            </div>
            <nav className="button-nav">
              <Link 
                className="nav-button-container" 
                style={{textDecoration: 'none'}} 
                href={'tel:1800766571'}
              >
                <button className="nav-button nav-button_1">
                  1800 POOLS 1
                </button>
              </Link>
              <Link 
                className="nav-button-container" 
                style={{textDecoration: 'none'}} 
                href={'/contact-us'}
              >
                <button className="nav-button nav-button_2">
                  Message Us
                </button>
              </Link>
            </nav>
          </header>
          <main>
              {menuIsOpen && <Menu className={menuIsOpen ? "header-menu" : "header-menu_closed"} />}
              {children}
          </main>
          <footer className="footer">
              <p className="footer-smalltext">
                &copy; 2023 The Pool Dude Pty Ltd.
                <br />Website by Anthony Garner
              </p>
          </footer>
        {/* </body> */}
    </div>
  )
}

export default Layout