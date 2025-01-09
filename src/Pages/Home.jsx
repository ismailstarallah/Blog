import React from 'react'
import Hero from '../Components/Home/Hero'
import Category from '../Components/Home/Category'
import Quotes from '../Components/Home/Quotes'
import PopularBooks from '../Components/Home/PopularBooks'

const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <Quotes />
      <PopularBooks />
    </>
  )
}

export default Home