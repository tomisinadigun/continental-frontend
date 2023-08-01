import React from 'react'
import { Link } from "react-router-dom"
// import "../styles/main.scss"

const Navbar = () => {
  return (
    <>
        <nav className='nav-bar'>
            <div className="left-nav all-nav">
                <ul>
                    <li><div className='nav-item'><a>Properties</a><hr /></div></li>
                    <li><div className='nav-item'><a>Properties</a><hr /></div></li>
                    <li><div className='nav-item'><a>Contact us</a><hr /></div></li>
                </ul>
            </div>
            <div className="logo"><Link to="/"><p>CONTINENTAL</p></Link></div>
            <div className="right-nav all-nav">
                <ul>
                    <li>
                        <div className="nav-item">
                            <Link to="/sign_up">Sing Up</Link>
                            <hr />
                        </div>
                    </li>
                    <li>
                        <div className="nav-item">
                            <Link to="/cart">Wish List</Link>
                            <hr />
                        </div>
                    </li> 
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar