import React from 'react'
import Navbar from './Navbar'
import Center from './Center'
import Bottom from './Bottom'
import './Home.css'
const Home = () => {
  return (
    <div className='homecontainer'>
      <Navbar />
      <Center />
      <Bottom />
    </div>
  )
}

export default Home