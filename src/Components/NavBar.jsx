import search_icon from '../assets/Search.png'
import { Link } from "react-router-dom"
import logo from '../assets/logo.png'
const NavBar = () => {
    return (
        <div className="flex justify-start items-center bg-[#8f97ca]/60 h-16 flex-shrink-0">
            <div className="flex px-28 h-8 absolute">
                <img src={logo} className='w-9 h-9' />
                <p className="text-[25px] text-black font-['Inter'] leading-normal text-center not-italic font-bold">eadpace</p>
            </div>
            <div className="flex flex-start w-96 gap-1 text-[18px] font-['Inter'] text-black font-medium left-[25%] absolute ">
                <div className="flex flex-col justify-center not-italic w-16 h-8 cursor-pointer" ><Link to='/'>Home</Link></div>
                <div className="flex flex-col justify-center not-italic w-16 h-8 cursor-pointer" ><Link to='/books'>Books</Link></div>
                <div className="flex flex-col justify-center not-italic w-16 h-8 cursor-pointer" >Service</div>
                <div className="flex flex-col justify-center not-italic h-8 cursor-pointer" >About Us</div>
            </div>
            <div className="flex p-2 h-8 absolute bg-white w-[300px] rounded-[20px] shadow-md mx-auto absolute right-[15%] active:bg-[#f3f3f3] ">
                <input type="text" placeholder="Search Books" className="flex-grow outline-none text-black/70 active:bg-[#f3f3f3]  text-xs font-extralight font-['Inter'] leading-[3px] px-4" />
                <button className="text-gray-500 hover:text-gray-700">
                    <img src={search_icon} className='w-[15px] h-4' />
                </button>
            </div>

            {/* <button className="absolute w-[112.92px] top-3 h-8 right-[10%] bg-[#90a955]/10 active:bg-[#90a954] rounded-lg border border-white text-center text-white text-[15px] font-extrabold font-['Inter'] leading-[3px]">Sign Up</button> */}
        </div>
    )
}

export default NavBar