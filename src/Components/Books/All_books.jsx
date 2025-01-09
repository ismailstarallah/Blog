import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import All_books_card from './All_books_card';
import Pagination from '../Pagination';

const All_Books = ({ category, subcategory }) => {
    const [books, setBooks] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchParams] = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;
    const booksPerPage = 10;



    // async await syntax
    useEffect(() => {

        setLoading(true);
        const fetchBooks = async () => {
            try {
                const response = await fetch(`http://localhost/php-blog/api.php?path=getPosts&category=${category}&subcategory=${subcategory}&page=${currentPage}&limit=${booksPerPage}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);

                setBooks(data.data);
                setTotalPages(data.totalPages);

                setLoading(false);
            } catch (error) {
                setError(error.message);
                console.log(error.message);
                setLoading(false);
            }
        };

        fetchBooks();

        // fetch(`http://localhost/php-blog/api.php?path=getPosts&category=${category}&subcategory=${subcategory}&page=${currentPage}&limit=${booksPerPage}`)
        //     .then(response => {
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //         return response.json();
        //     })
        //     .then(data => {
        //         if (data.success) {
        //             setBooks(data.data);
        //             console.log(data.data);
        //             setTotalPages(data.totalPages);
        //         } else {
        //             throw new Error(data.message);
        //         }
        //         setLoading(false);
        //     })
        //     .catch(error => {
        //         setError(error.message);
        //         console.log(error.message);

        //         setLoading(false);
        //     });
    }, [currentPage, category, subcategory]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="flex flex-col gap-4">
            {books.map(book => (
                <div key={book.id}>
                    <All_books_card book={book} />
                </div>
            ))}
            <Pagination currentPage={currentPage} totalPages={totalPages} category={category} subcategory={subcategory} />
        </div>
    );
};

export default All_Books;
