import { useState } from 'react'
import search_icon from '../assets/Search.png'
import { Link } from "react-router-dom"
import logo from '../assets/logo.png'



const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false); // État pour le menu mobile

    return (
        <div className="flex justify-between items-center bg-[#8f97ca]/60 h-16 px-4 z-20">
            {/* Logo Section */}
            <div className="flex px-16 md:px-28 h-8 absolute">
                <img src={logo} className="w-9 h-9" alt="Logo" />
                <Link to="/" >
                    <p className="text-[25px] text-black font-['Inter'] leading-normal text-center not-italic font-bold">
                        eadpace
                    </p>
                </Link>
            </div>
            {/* Navigation Links (Desktop) */}
            <div className="hidden lg:flex flex-start w-96 gap-1 text-[18px] font-['Inter'] text-black font-medium left-[25%] absolute">
                <Link to="/" className="flex flex-col justify-center not-italic w-16 h-8 cursor-pointer">
                    Home
                </Link>
                <Link to="/books" className="flex flex-col justify-center not-italic w-16 h-8 cursor-pointer">
                    Books
                </Link>
                <div className="flex flex-col justify-center not-italic w-16 h-8 cursor-pointer">Service</div>
                <div className="flex flex-col justify-center not-italic h-8 cursor-pointer">About Us</div>
            </div>

            {/* Search Bar */}
            <div className="hidden sm:flex p-2 h-8 absolute bg-white rounded-[20px] shadow-md mx-auto absolute right-[15%] w-[250px] md:w-[300px]  active:bg-[#f3f3f3]">
                <input
                    type="text"
                    placeholder="Search Books"
                    className="flex-grow outline-none text-black/70 active:bg-[#f3f3f3] text-xs font-extralight font-['Inter'] leading-[3px] px-4"
                />
                <button>
                    <img src={search_icon} className="w-[15px] h-4" alt="Search" />
                </button>
            </div>

            {/* Hamburger Menu (Mobile) */}
            <div className="lg:hidden absolute right-[10%]">
                <button
                    className="text-black"
                    onClick={() => setShowMenu(!showMenu)} // Basculer l'état
                >
                    {showMenu ? <button>✖️</button> : <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>}
                </button>
            </div>

            {/* Mobile Navigation (Dropdown) */}
            <div
                className={`fixed top-16 right-0 w-2/4 h-screen bg-[#8f97ca]/80 text-center lg:hidden z-50 transform transition-transform duration-1000 ease-in-out ${showMenu ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="block py-4 text-white">
                    <div className="sm:hidden flex p-2 h-8 bg-white rounded-[20px] shadow-md mx-auto w-[95%]  active:bg-[#f3f3f3]">
                        <input
                            type="text"
                            placeholder="Search Books"
                            className="flex-grow outline-none text-black/70 active:bg-[#f3f3f3] text-xs font-extralight font-['Inter'] leading-[3px] px-4"
                        />
                        <button>
                            <img src={search_icon} className="w-[15px] h-4" alt="Search" />
                        </button>
                    </div>
                </div>

                <Link to="/" onClick={() => setShowMenu(false)} className="block text-[18px] font-['Inter'] text-black font-medium py-4 hover:bg-[#8f97ca]/40 text-white">
                    Home
                </Link>
                <Link to="/books" onClick={() => setShowMenu(false)} className="block text-[18px] font-['Inter'] text-black font-medium py-4 hover:bg-[#8f97ca]/40 text-white">
                    Books
                </Link>
                <span className="block text-[18px] font-['Inter'] text-black font-medium py-4 cursor-pointer hover:bg-[#8f97ca]/40 text-white">
                    Service
                </span>
                <span className="block text-[18px] font-['Inter'] text-black font-medium py-4 cursor-pointer hover:bg-[#8f97ca]/40 text-white">
                    About Us
                </span>
            </div>
        </div>
    );
};

export default NavBar