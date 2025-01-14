import quotes_img from '../../assets/quotes_img.png'

const Quotes = () => {
    return (
        <div className='flex flex-col'>
            <div className='h-[10vh] flex justify-center items-center pt-8 '>
                <div className="md:w-[420px] w-[100px] h-[0px] border-2 border-black"></div>
                <div className="text-black md:text-4xl text-2xl md:px-8 px-4 font-normal font-inria-serif leading-[76.80px]">Quote of the day</div>
                <div className="md:w-[420px] w-[100px] h-[0px] bg-[#d9d9d9] border-2 border-black"></div>
            </div>
            <div className='flex flex-row pb-32 pt-16'>
                <div className='flex  w-[50%]'>
                    <img src={quotes_img} alt="" className='hidden md:flex mx-auto' />
                </div>
                <div className='flex w-full md:w-[60%] mx-4'>
                    <div className="flex justify-center items-center max-w-[600px] py-4 max-h-[300px]">
                        <div className="relative w-full border-black border-2">
                            <div className="absolute -top-4 left-1/4 transform -translate-x-1/2 bg-white px-2 text-xl font-bold font-inria-serif">
                                The Burning Earth
                            </div>
                            <div className="px-6 pt-3 pb-3 text-black text-xl font-light font-inria-serif leading-10 line-clamp-3">
                                "The Earth is not simply a place we live; it is the source of all life. And yet, we have torn it apart, polluted its air, poisoned its waters
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quotes