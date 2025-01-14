import React, { useState, useEffect } from 'react';


const Book = ({ id_book }) => {
    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [paragraph, setParagraph] = useState("");


    useEffect(() => {
        setLoading(true);
        const fetchBook = async () => {
            try {
                const response = await fetch(`http://localhost/php-blog/api.php?path=getPost&id=${id_book}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBook(data.data);
                setParagraph(data.data.description);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }
        fetchBook();
    }, [id_book])
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    const handleContent = (content) => {
        if (content === "Description") setParagraph(book.description);
        if (content === "Excerpt") setParagraph(book.excerpt);
        if (content === "Contents") setParagraph(book.contents);
    }

    return (

        <div className="w-full md:px-8 h-auto flex flex-col bg-[#8f97ca]/30 shadow-inner border-[1.5px] border-[#143931] rounded-xl">
            <div className="flex justify-center md:p-8 items-center">
                <img
                    className="w-full h-full object-cover md:h-96 border-[1px] border-[#143931]/60 rounded-xl"
                    src={`http://localhost/php-blog/admin/upload/${book.image}`}
                    alt={book.title}
                />
            </div>

            <div className="w-full flex flex-col justify-between pt-4 pl-4">
                <p className="text-xl font-normal font-inria-serif">
                    {book.title}
                    <span className="block text-black/70 text-sm">
                        {book.bookAuthor}
                    </span>
                </p>
                <ul className="flex flex-row md:gap-8 gap-4 mt-4">
                    <li onClick={() => { handleContent("Description") }} className={`md:text-xl text-base font-bold font-light font-inria-serif leading-10 cursor-pointer ${paragraph === book.description ? "text-[#90a955] border-b-2 border-[#90a955]" : "text-black "}`}>
                        Description
                    </li>
                    <li onClick={() => { handleContent("Excerpt") }} className={`md:text-xl text-base font-bold font-light font-inria-serif leading-10 cursor-pointer ${paragraph === book.excerpt ? "text-[#90a955] border-b-2 border-[#90a955]" : "text-black "}`}>
                        Excerpt
                    </li>
                    <li onClick={() => { handleContent("Contents") }} className={`md:text-xl text-base font-bold font-light font-inria-serif leading-10 cursor-pointer ${paragraph === book.contents ? "text-[#90a955] border-b-2 border-[#90a955]" : "text-black "}`}>
                        Contents
                    </li>
                </ul>
                <p className="text-black py-12 text-sm font-light font-inria-serif leading-loose">
                    {paragraph}
                </p>
            </div>
        </div>


    )
}

export default Book