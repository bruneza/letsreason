import React from 'react'
import logo from '../imgs/logo.png'
import navMenu from '../data/navBar.json'
import Image from './elements/Image'

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <Image img={logo} css={'logo-image'} alt={`Let's Reason Logo`} />
        </div>
        <nav className="nav-menu pad">
          <ul>
            {
              navMenu.map((link) => {
                return (
                  <li className='nav-item' key={link.id}>
                    <a href={link.url}>{link.name}</a>
                  </li>
                )
              })
            }

          </ul>
        </nav>
        <div className="special-nav">
          <a className='btn-nav' href="/#">Donate</a>
        </div>
      </div>
    </div>
  )
}
export default Header