import React from 'react'
import Navbar from './Navbar'
import Topbar from './Topbar'

const Header = () => {
  return (
    <>
        <div className="header">
            <Topbar />
            <Navbar />
        </div>
    </>
  )
}

export default Header