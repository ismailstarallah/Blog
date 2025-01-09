import All_Books from '../Components/Books/All_Books'
import Side_Bar from '../Components/Side_Bar'
import { useSearchParams } from 'react-router-dom';


const Books = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category') || '';
    const subcategory = searchParams.get('subcategory') || '';

    return (
        <div className="flex flex-col md:flex-row p-10">
            {/* Left Sidebar */}
            <div className="flex flex-col lg:w-[70%] gap-4 p-4">
                <All_Books category={category} subcategory={subcategory} />
            </div>

            {/* Right Sidebar */}
            <div className="hidden md:block mt-3 w-[28%] ml-8 bg-[#8f97ca]/20 rounded-tl-[30px] rounded-tr-[30px] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black">
                <Side_Bar />
            </div>
        </div>
    )
}

export default Books