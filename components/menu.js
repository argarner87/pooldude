import Link from "next/link"

const Menu = (menuIsOpen) => {
  return (
    <div className={menuIsOpen ? "header-menu" : "header-menu_closed"}>
        <nav className='header-menu-nav'>
            <ul>
                <Link style={{textDecoration: 'none'}} href='/regular-maintenance'>
                  <li className='header-menu-item'>Regular Pool Maintenance</li>
                </Link>
                
                <Link style={{textDecoration: 'none'}} href='/green-pool-recovery'>
                  <li className='header-menu-item'>Green Pool Recovery</li>
                </Link>
                
                <Link style={{textDecoration: 'none'}} href='/commercial-solutions'>
                  <li className='header-menu-item'>Commercial Pool Solutions</li>
                </Link>
                
                <Link style={{textDecoration: 'none'}} href='/equipment'>
                  <li className='header-menu-item'>Equipment & Spares</li>
                </Link>
                
                <Link style={{textDecoration: 'none'}} href='/chemicals'>
                  <li className='header-menu-item'>Chemicals</li>
                </Link>
                
                <Link style={{textDecoration: 'none'}} href='/about-us'>
                  <li className='header-menu-item'>About Us</li>
                </Link>
                
                <Link style={{textDecoration: 'none'}} href='/blog'>
                  <li className='header-menu-item'>Blog (coming soon!)</li>
                </Link>
                
                <Link style={{textDecoration: 'none'}} href='/login'>
                  <li className='header-menu-item'>Employee Login</li>
                </Link>
                
                <Link style={{textDecoration: 'none'}} href='/contact-us'>
                  <li className='header-menu-item'>Contact Us</li>
                </Link>
            </ul>
        </nav>
    </div>
  )
}

export default Menu