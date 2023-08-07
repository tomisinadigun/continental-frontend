import React from 'react'
import Search from './Search'
import Range from './Range'
import Tag from './Tag'

const SideBar = () => {
  return (
    <div className='side-bar'>
      <Search />
      <Range />
      <Tag />
    </div>
  )
}

export default SideBar