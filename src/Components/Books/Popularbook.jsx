import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PopularBooks_card = ({ limit, popular }) => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();


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
    const handleBookClick = (id) => {
        navigate(`/book/${id}`);
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    };

    return (
        <div className="hidden md:flex flex-col items-center py-4 space-y-6">
            {books.map((book) => (
                <div
                    key={book.id}
                    className={`relative flex ${popular ? 'flex-row' : 'flex-col'} items-center w-full space-x-4 md:space-x-6`}
                >
                    <div className={`${popular ? 'w-1/3' : 'w-72'} flex items-center justify-center`}>
                        <img
                            onClick={() => handleBookClick(book.id)}
                            src={`http://localhost/php-blog/admin/upload/${book.image}`}
                            alt={book.title}
                            className="h-40 lg:w-56 w-32 border rounded-[30px] shadow-md border-black object-cover"
                        />
                    </div>

                    <div className={`${popular ? 'w-2/3' : 'w-full '} mt-2 md:mt-0`}>
                        <p onClick={() => handleBookClick(book.id)} className="text-xl font-normal font-inria-serif text-black">{book.title}</p>
                        <p className={`text-black/70 text-sm font-normal font-inria-serif mt-1 line-clamp-6 text-sm/6`}>
                            <span className="text-black/90  text-base">{book.bookAuthor}</span>
                            <br />
                            {popular ? book.seo_description : ""}
                        </p>
                    </div>
                </div>
            ))}
        </div>

    );
}

export default PopularBooks_card;