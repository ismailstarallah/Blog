import insta_icon from "../assets/intagram.jpeg";
import fb_icon from "../assets/fb.jpeg";
import X_icon from "../assets/X.jpeg";

const Footer = () => {
  return (
    <footer className="p-6">
      <div className="w-[90%] h-[0px] mx-auto border-2 border-black"></div>
      <div className="container mt-16 mx-auto flex flex-wrap justify-between items-start">
        {/* Left Section: Logo */}
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h2 className="text-3xl font-inria-serif font-bold">Readscape.</h2>
        </div>

        {/* Center Section: Quick Links */}
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h3 className="text-xl font-bold mb-3 font-inria-serif">Quick Links</h3>
          <ul className="space-y-2">
            <li className="text-lg font-normal font-inria-serif cursor-pointer">
              Home
            </li>
            <li className="text-lg font-normal font-inria-serif cursor-pointer">
              Plant Type's
            </li>
            <li className="text-lg font-normal font-inria-serif cursor-pointer">
              Contact
            </li>
            <li className="text-lg font-normal font-inria-serif cursor-pointer">
              Privacy
            </li>
          </ul>
        </div>

        {/* Right Section: Subscribe */}
        <div className="w-full sm:w-1/3">
          <h3 className="text-xl font-bold mb-3 font-inria-serif">For Every Update</h3>
          <form className="flex items-center  border-black border-2 rounded-md">
            <input type="email" placeholder="Enter Email..." className="flex-grow outline-none text-black/70 active:bg-[#f3f3f3]  text-sm font-extralight font-['Inter'] leading-[3px] px-4" />
            <button type="submit" className="p-2 bg-black text-white font-inria-serif hover:bg-gray-800">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto flex flex-wrap justify-between items-center mt-6 border-t pt-4 text-sm font-semibold font-inria-serif">
        {/* Social Icons */}
        <div className="flex space-x-4 ">
          <div className="w-9 cursor-pointer">
            <img src={fb_icon} alt="" />
          </div>
          <div className="w-8 cursor-pointer">
            <img src={insta_icon} alt="" />
          </div>
          <div className="w-10 cursor-pointer">
            <img src={X_icon} alt="" />
          </div>
        </div>

        {/* Copyright */}
        <div>Readscape @ All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
