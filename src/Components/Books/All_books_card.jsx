import React from 'react'

const All_books_card = ({ book }) => {
    const visibleText = book.description.length > 270 ? book.description.slice(0, 270) + "..." : book.description;
    return (
        <div className="w-full h-[35vh] flex flex-col sm:flex-row bg-[#8f97ca]/30 rounded-2xl shadow-inner border-[1.5px] border-[#143931]">
            <div className="w-full sm:w-1/3 flex justify-center items-center">
                <img
                    className="w-full h-full object-cover border-r-2 border-black rounded-l-xl"
                    src={`http://localhost/php-blog/admin/upload/${book.image}`}
                    alt={book.title}
                />
            </div>

            <div className="w-full sm:w-2/3 flex flex-col justify-between pt-4 pl-4">
                <p className="text-xl font-normal font-inria-serif">
                    {book.title}
                    <span className="block text-black/70 text-sm">
                        {book.bookAuthor}
                    </span>
                </p>
                <div className="relative p-4 pl-1">
                    <p className="text-black text-sm font-light font-inria-serif leading-loose">
                        {visibleText}
                        {book.description.length > 270 && (
                            <span
                                className="text-black font-normal font-['Inder'] leading-[20.80px] cursor-pointer ml-1 hover:underline"
                            >
                                read more
                            </span>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default All_books_card