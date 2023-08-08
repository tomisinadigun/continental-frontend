import React from 'react'
import Search from './Search'
import Range from './Range'
import Tags from './Tags'

const SideBar = () => {

  return (
    <div className='side-bar'>
      <Search />
      <Range />
      <Tags />
    </div>
  )
}

export default SideBar