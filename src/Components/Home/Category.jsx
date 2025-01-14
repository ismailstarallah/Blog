import React from 'react'
import Category_card from './Category_card'
const Category = () => {
    return (
        <div className='flex flex-col'>
            <div className='h-[10vh] flex justify-center items-center pt-8 '>
                <div className="w-[468px] h-[0px] border-2 border-black"></div>
                <div className="text-black md:text-4xl text-3xl md:px-12 px-4 font-normal font-inria-serif leading-[76.80px]">Category</div>
                <div className="w-[468px] h-[0px] bg-[#d9d9d9] border-2 border-black"></div>
            </div>
            <Category_card />
        </div>

    )
}

export default Category