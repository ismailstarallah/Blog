import { Link } from 'react-router-dom'



const Hero = () => {
    return (
        <div className='h-[90vh] flex justify-center relative bg-cover bg-center bg-hero-pattern'>
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className='absolute top-72 left-[50%] lg:top-[45%] lg:left-[30%] transform -translate-x-1/2 -translate-y-1/2'>
                <h1 className=" md:w-[600px] w-[350px] text-white text-center md:text-start md:text-5xl text-3xl font-bold md:font-extrabold font-inria-serif md:leading-[60px] leading-[30px] brightness-150">
                    Your Journey Begins Between the Covers
                </h1>

                <p className="md:w-[600px] w-[350px] h-[76px] mt-4 text-white text-center md:text-start md:text-2xl text-lg font-normal font-inria-serif leading-[20px]  md:leading-[38.40px] brightness-150">
                    Welcome to Your Literary Haven: Explore a World of Stories That Inspire, Educate
                </p>
                <div className='flex justify-center md:justify-start md:mt-10'>
                    <Link to="/books"><button className='sm:w-32 sm:h-12 w-24 ml-4 bg-[#d9d9d9] rounded-[10px] text-center text-black sm:text-xl font-normal font-inria-serif leading-[38.40px]'>Explore</button></Link>
                    <button className='sm:w-32 sm:h-12 w-24 ml-6 bg-[#d9d9d9]/0 rounded-[10px] border border-white text-center text-white sm:text-2xl font-normal font-inria-serif leading-[38.40px]'>Browse</button>
                </div>
            </div>
        </div>
    )
}

export default Hero