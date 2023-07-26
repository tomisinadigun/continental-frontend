import React from 'react'
import { Link } from "react-router-dom"
// import "../styles/main.scss"

const Navbar = () => {
  return (
    <>
        <div className='nav-bar'>
            <div className="left-nav">
                <ul>
                    <li><span>Shop Bands</span></li>
                    <li><span>Try-On kit</span></li>
                    <li><span>More Info</span></li>
                </ul>
            </div>
            <div className="logo">MARKE</div>
            <div className="right-nav">
                <ul>
                    <li><Link to="/sign_up">Sing Up</Link></li>
                    <li><Link to="/cart">Shopping Bag</Link></li> 
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar