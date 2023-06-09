import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbarContainer'>
      <div className="wrapper">
        <div className="left">
          <span>EN</span>
          <div className="seacrhContainer">
            <input type="text" />
            <BiSearchAlt2 className='searcIcon'></BiSearchAlt2>
          </div>
        </div>
        <div className="center">
          <h1 className="logo">ABR</h1>

        </div>
        <div className="right">
          <div className="menuItems">
            REGISTER
          </div>
          <div className="menuItems">
            LOGIN
          </div>
          <div className="menuItems cartItem">
            <AiOutlineShoppingCart className='cart' />
            <span className='cartCount'>3</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar