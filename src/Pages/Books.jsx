import All_Books from '../Components/Books/All_Books'


const Books = () => {
    return (
        <div className="flex flex-col md:flex-row p-10">
            {/* Left Sidebar */}
            <div className="flex flex-col lg:w-[70%] gap-4 p-4">
                <All_Books />
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block w-[30%]">
                <div className='sticky top-10 bg-red-100 h-6'></div>
            </div>
        </div>
    )
}

export default Books