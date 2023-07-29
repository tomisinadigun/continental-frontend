import React from 'react'
import Header from '../components/Header'
import Indicator from '../components/Indicator'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
        <div className="home">
            <Header />
            <Indicator>Home</Indicator>
            <Banner />
        </div>
    </div>
  )
}

export default Home