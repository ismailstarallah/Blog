import React, { useState, useEffect } from 'react';
import All_books_card from './All_books_card';
import arrow_left from '../../assets/arrow_left_2.png'
import arrow_right from '../../assets/arrow_right_2.png'


const All_Books = () => {
    const [books, setBooks] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 10;

    useEffect(() => {
        fetch(`http://localhost/php-blog/api.php?path=getPosts&page=${currentPage}&limit=${booksPerPage}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.success) {
                    setBooks(data.data);
                    setTotalPages(data.totalPages);
                } else {
                    throw new Error(data.message);
                }
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [currentPage]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            {books.map(book => (
                <div key={book.id}>
                    <All_books_card book={book} />
                </div>
            ))}
            <div className="flex justify-center mt-4">
                {currentPage > 1 && (
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        className="px-3 py-1 mx-1"
                    >
                        <img src={arrow_left} className='w-4 h-4' />
                    </button>
                )}
                <button
                    onClick={() => paginate(1)}
                    className={`px-3 py-1 mx-1 rounded-[15px] border border-black ${currentPage === 1 ? 'bg-black text-white' : 'bg-white text-black'}`}
                >
                    1
                </button>
                {currentPage > 2 && <span className="px-3 py-1 mx-1">...</span>}
                {currentPage > 1 && currentPage < totalPages && (
                    <button
                        onClick={() => paginate(currentPage)}
                        className="px-3 py-1 mx-1 rounded-[15px] border border-black bg-black text-white"
                    >
                        {currentPage}
                    </button>
                )}
                {currentPage < totalPages - 1 && (
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        className="px-3 py-1 mx-1 rounded-[15px] border border-black bg-white text-black"
                    >
                        {currentPage + 1}
                    </button>
                )}
                {currentPage < totalPages - 1 && <span className="px-3 py-1 mx-1">...</span>}
                <button
                    onClick={() => paginate(totalPages)}
                    className={`px-3 py-1 mx-1 rounded-[15px] border border-black ${currentPage === totalPages ? 'bg-black text-white' : 'bg-white text-black'}`}
                >
                    {totalPages}
                </button>
                {currentPage < totalPages && (
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        className="px-3 py-1 mx-1"
                    >
                        <img src={arrow_right} className='w-4 h-4' />
                    </button>
                )}
            </div>
        </>
    );
}

export default All_Books;