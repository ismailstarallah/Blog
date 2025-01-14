import Book from '../Components/Books/Book'
import Side_Bar from '../Components/Side_Bar'
import Comment_section from '../Components/Comment_section'
import { useParams } from 'react-router-dom';


const One_Book = () => {

    const id_book = useParams();

    return (
        <div className="flex flex-col">
            <div className="flex flex-col md:flex-row p-10">
                <div className="w-full md:px-8 h-auto flex flex-col gap-4">
                    <Book id_book={id_book.id} />
                </div>

                {/* Right Sidebar */}
                <div className="hidden md:block mt-3 w-[28%] ml-8 bg-[#8f97ca]/20 rounded-tl-[30px] rounded-tr-[30px] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black">
                    <Side_Bar />
                </div>
            </div >
            <div className="flex flex-col md:flex-row px-10">
                <Comment_section id_book={id_book.id} />
            </div>
        </div>
    )
}

export default One_Book