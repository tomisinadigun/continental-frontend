import React from 'react'
import Header from '../components/Header'
import Indicator from '../components/Indicator'
import Banner from '../components/Banner'
import Item from '../components/Item'
import ItemList from '../components/ItemList'
import Title from '../components/Title'
import Main from '../components/Main'

const Home = () => {
  return (
    <div>
        <div className="home">
            <Header />
            <div className='home-inner'>
              <Banner /> 
              <Main />
            </div>
        </div>
    </div>
  )
}

export default Home