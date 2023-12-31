import React from 'react'
import { Link } from "react-router-dom"
import Topbar from './Topbar'
import menuIcon from "../assets/menuicon.svg"
import cancelIcon from "../assets/cancel.svg"
import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../features/toggleSlice'
import { showMenu } from '../features/menuSlice'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const menu = useSelector((state) => state.menu)
    const dispatch = useDispatch()


    

    const [isFixed, setIsFixed] = useState(false);
    

  const handleScroll = () => {
    // Calculate the scroll position threshold where you want the element to become fixed
    const scrollThreshold = 30; // Change this value to your desired threshold

    // Check if the current scroll position is beyond the threshold
    if (window.scrollY > scrollThreshold) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    
  return (
    <>
        <div className={isFixed ? "adjust-header " : ""}>
            <div className={isFixed ? 'nav-bar-outer fixed-header' : "nav-bar-outer"}>
                <Topbar />
                <nav className= "nav-bar  " >
                    <div className="left-nav all-nav">
                        <ul>
                            <li><div className='nav-item'><a>Properties</a><hr /></div></li>
                            <li><div className='nav-item'><a>Properties</a><hr /></div></li>
                            <li><div className='nav-item'><a>Contact us</a><hr /></div></li>
                        </ul>
                    </div>
                    <div className="logo">
                        <Link to="/"><p>CONTINENTAL</p></Link> 
                        <img src={ !menu? menuIcon : cancelIcon } alt="" className='menu-icon' onClick={() => dispatch(showMenu())} /> 
                    </div>
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

        <div className={menu ? "hidden-menu display-menu": "hidden-menu hide-menu"}>
            <ul>
                <li><div className='nav-item'><a>Properties</a></div></li>
                <li><div className='nav-item'><a>Properties</a></div></li>
                <li><div className='nav-item'><a>Contact us</a></div></li>
                <li>
                    <div className="nav-item">
                        <Link to="/sign_up">Sing Up</Link>
                    </div>
                </li>
                <li>
                    <div className="nav-item">
                        <Link to="/cart">Wish List</Link>
                    </div>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Navbar