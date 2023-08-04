import React from 'react'
import { Link } from "react-router-dom"
import Topbar from './Topbar'

import { useState } from 'react'

const Navbar = () => {
    // const [fix, setFix] = useState(false);

    // function setFixed(){
    //     if(window.scrollY >= 204){
    //         setFix(true)
    //     }else if(window.scrollY == 0) {
    //         setFix(false)
    //     }

    // }

    // window.addEventListener("scroll", setFixed)
  return (
    <>
        <div className='adjust-bar'>
            <div className='nav-bar-outer fix-nav-bar'>
                <Topbar />
                <nav className= "nav-bar  " >
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
            </div>
        </div>
    </>
  )
}

export default Navbar