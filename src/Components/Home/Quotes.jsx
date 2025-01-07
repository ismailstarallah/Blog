import quotes_img from '../../assets/quotes_img.png'

const Quotes = () => {
    return (
        <div className='flex flex-col'>
            <div className='h-[10vh] flex justify-center items-center pt-8 '>
                <div className="w-[420px] h-[0px] border-2 border-black"></div>
                <div className="text-black text-4xl px-8 font-normal font-inria-serif leading-[76.80px]">Quote of the day</div>
                <div className="w-[420px] h-[0px] bg-[#d9d9d9] border-2 border-black"></div>
            </div>
            <div className='flex items-center pb-32 pt-16 pl-32'>
                <div className="flex justify-center items-center py-4 w-[60%] max-h-[300px]">
                    <div className="relative w-full border-black border-2">
                        <div className="absolute -top-4 left-1/4 transform -translate-x-1/2 bg-white px-2 text-xl font-bold font-inria-serif">
                            Title of the Top Bar
                        </div>
                        <div className="px-6 pt-3 pb-3 text-black text-xl font-light font-inria-serif leading-10 line-clamp-3">
                            "The Earth is not simply a place we live; it is the source of all life. And yet, we have torn it apart, polluted its air, poisoned its waters
                        </div>
                    </div>
                </div>
                <img src={quotes_img} alt="" className='flex w-52 right-40 absolute' />
            </div>
        </div>
    )
}

export default Quotes