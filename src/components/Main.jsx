import React from 'react'
import MainBar from './MainBar'
import SideBar from './SideBar'

const Main = () => {
  return (
    <main className='body-container'>
        <SideBar />
        <MainBar />
    </main>
  )
}

export default Main