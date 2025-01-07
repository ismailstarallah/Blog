


const Hero = () => {
    return (
        <div className='h-[90vh] flex relative bg-cover bg-center bg-hero-pattern'>
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className='absolute top-[45%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 z-10'>
                <h1 className="text-white text-[60px] font-extrabold font-inria-serif leading-[60px] brightness-150">
                    Your Journey Begins<br />Between the Covers
                </h1>
                <p className="w-[457px] h-[76px] text-white text-2xl font-normal font-inria-serif leading-[38.40px] brightness-150">
                    Welcome to Your Literary Haven: Explore<br />a World of Stories That Inspire, Educate
                </p>
                <button className='w-32 h-12 mt-10 ml-4 bg-[#d9d9d9] rounded-[10px] text-center text-black text-xl font-normal font-inria-serif leading-[38.40px]'>Explore</button>
                <button className='w-32 h-12 ml-6 bg-[#d9d9d9]/0 rounded-[10px] border border-white text-center text-white text-2xl font-normal font-inria-serif leading-[38.40px]'>Browse</button>
            </div>
        </div>
    )
}

export default Hero