import React from 'react'
import Header from '../components/Header'
import Indicator from '../components/Indicator'
import Banner from '../components/Banner'
import Item from '../components/Item'
import ItemList from '../components/ItemList'

const Home = () => {
  return (
    <div>
        <div className="home">
            <Header />
            <Indicator>Home</Indicator>
            <div className='home-inner'>
              <Banner />
              <ItemList />
              <ItemList />
            </div>
        </div>
    </div>
  )
}

export default Home