import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
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

    useEffect(() => {
        setLoading(true);
        const fetchBooks = async () => {
            try {
                const response = await fetch(`http://localhost/php-blog/api.php?path=getPosts&category=${category}&subcategory=${subcategory}&page=${currentPage}&limit=${booksPerPage}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBooks(data.data);
                setTotalPages(data.totalPages);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchBooks();
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
                    <Link to={`/book/${book.id}`}> <All_books_card book={book} /></Link>
                </div>
            ))}
            <Pagination currentPage={currentPage} totalPages={totalPages} category={category} subcategory={subcategory} />
        </div>
    );
};

export default All_Books;
