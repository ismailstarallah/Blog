import { useEffect, useState } from 'react';

const PopularBooks_card = () => {
    const [books, setBooks] = useState([]);
    const limit = 1;

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(`http://localhost/php-blog/api.php?path=getPopularBooks&limit=${limit}`);
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des livres');
                }
                const data = await response.json();
                if (data.success) {
                    setBooks(data.data);
                }
            } catch (error) {
                console.error('Erreur:', error);
            }
        };
        fetchBooks();
    }, []);

    return (
        <div className="flex flex-col items-center py-4">
            {books.map(book => (
                <div key={book.id} className="relative flex  flex-col items-center w-full overflow-x-auto">
                    <div className="w-64 flex items-center justify-center">
                        <img src={`http://localhost/php-blog/admin/upload/${book.image}`} alt={book.title} className="min-h-64 max-w-56 border rounded-[30px] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)] border-black object-cover" />
                    </div>
                    <div className="ml-4">
                        <p className="flex justify-center text-xl font-normal font-inria-serif">{book.title}</p>
                        <p className="flex justify-center text-black/70 text-xs font-normal font-inria-serif">{book.bookAuthor}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PopularBooks_card;