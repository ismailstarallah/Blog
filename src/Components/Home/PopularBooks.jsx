import PopularBooks_card from "./PopularBooks_card"

const PopularBooks = () => {
    return (
        <div className='flex flex-col'>
            <div className='h-[10vh] flex justify-center items-center pt-8 '>
                <div className="w-[450px] h-[0px] border-2 border-black"></div>
                <div className="text-black text-4xl px-8 font-normal font-inria-serif leading-[76.80px]">Popular Books</div>
                <div className="w-[450px] h-[0px] bg-[#d9d9d9] border-2 border-black"></div>
            </div>  
            <PopularBooks_card limit={5} />
        </div>
    )
}

export default PopularBooks