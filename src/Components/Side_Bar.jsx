import React from 'react'
import PopularBook from './Books/Popularbook'
import Categories from './Categories'

const Side_Bar = ({ setCategory, setSubcategory }) => {
  const popular = true;

  return (
    <>
      <p className='hidden md:flex mx-[20%] my-4 text-black text-xl font-bold font-inria-serif leading-loose'>suggested books</p>
      <PopularBook limit={1} />
      <Categories setCategory={setCategory} setSubcategory={setSubcategory} />
      <div className="w-[85%] h-[0px] mx-auto border-[1px] border-black/50 rounded-full"></div>
      <p className='hidden md:flex mx-[20%] my-4 text-black text-xl font-bold font-inria-serif leading-loose'>Popular books</p>
      <PopularBook limit={2} popular={popular} />
    </>
  )
}

export default Side_Bar