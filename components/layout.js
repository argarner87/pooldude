
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
        <header className='header'>
          <div className="header-logobar">
            <Link style={{textDecoration: 'none'}} href='/'>
              <h1 className="header-logo">Pool Dude</h1>
            </Link>
            <button className="menu-button" onClick={handleMenu}>
              <div className={menuIsOpen ? "menu-icon_open" : "menu-icon"} />
            </button>
            {/* <FontAwesomeIcon
              icon={faBars} 
              className='header-menuicon' 
              onClick={handleMenu}
            /> */}
          </div>
            {/* <nav className="header-nav">
              <div className="header-nav-button">
                <p className="header-nav-button-txt">Contact us</p> 
              </div>
              <div className="header-nav-button">
                <p className="header-nav-button-txt">Staff Login</p> 
              </div>
            </nav> */}
            <nav className="button-nav">
              <button className="nav-button nav-button_1">
                1800 POOLS 1
              </button>
              <button className="nav-button nav-button_2">
                Message Us
              </button>
            </nav>
        </header>
        <main>
            {menuIsOpen && <Menu  className={menuIsOpen ? "header-menu" : "header-menu_closed"} />}
            {/* <Menu isOpen={menuIsOpen} /> */}
            {children}
        </main>
        <footer className="footer">
            <p className="footer-smalltext">
              &copy; 2023 The Pool Dude Pty Ltd.
              <br />Website by Anthony Garner
            </p>
        </footer>
    </div>
  )
}

export default Layout