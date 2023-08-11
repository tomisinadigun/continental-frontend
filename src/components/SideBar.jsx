import React from 'react'
import Search from './Search'
import Range from './Range'
import Tags from './Tags'
import { useState, useEffect } from 'react'

const SideBar = () => {

  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    // Calculate the scroll position threshold where you want the element to become fixed
    const scrollThreshold = 510; // Change this value to your desired threshold

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
    <div className={isFixed ? "adjust-sidebar" : "side-bar"}>
      <div className={isFixed ? 'fixed-sidebar side-bar' : 'side-bar'}>
        <Search />
        <Range />
        <Tags />
      </div>
    </div>
  )
}

export default SideBar