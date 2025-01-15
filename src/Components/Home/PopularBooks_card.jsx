import { Link } from 'react-router-dom';
import arrow_left from '../../assets/arrow_left.png'
import arrow_right from '../../assets/arrow_right.png'
import { useEffect, useState, useRef } from 'react'


const PopularBooks_card = () => {
    const [books, setbooks] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('http://localhost/php-blog/api.php?path=getPopularBooks');
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des livres');
                }
                const data = await response.json();
                if (data.success) {
                    setbooks(data.data);
                }
            } catch (error) {
                console.error('Erreur:', error);
            }
        };
        fetchBooks();
    }, []);

    const handlePrev = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: -containerRef.current.offsetWidth, // Scroll vers la gauche
                behavior: 'smooth',
            });
        }
    };

    const handleNext = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: containerRef.current.offsetWidth, // Scroll par la largeur visible
                behavior: 'smooth', // Transition fluide
            });
        }
    };

    return (
        <div className="flex flex-col items-center py-16">
            <div className="relative flex items-center w-full px-4 md:px-48 overflow-x-hidden">
                {/* Bouton gauche */}
                <button
                    onClick={handlePrev}
                    className="hidden md:flex absolute left-0 md:left-32 p-2 z-10 transition-opacity opacity-100 hover:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <img
                        src={arrow_left}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
                        alt="Scroll left"
                    />
                </button>

                <div ref={containerRef} className="overflow-x-auto scrollbar-hide overflow-y-hidden w-full snap-x snap-mandatory">
                    <div className="flex transition-transform duration-300">
                        {books.map((book, id) => (
                            <div key={id} className="flex flex-col items-center w-1/3 px-2 sm:px-4 snap-center shrink-0">
                                <div className="w-32 h-36  lg:w-64 lg:h-72 flex items-center justify-center">
                                    <img src={`http://localhost/php-blog/admin/upload/${book.image}`} alt={book.title} className="min-h-36 lg:min-h-64 max-w-32 lg:max-w-48  min-[1100px]:max-w-56 border rounded-[30px] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)] border-black object-cover" />
                                </div>
                                <Link to={`/book/${book.id}`}>
                                    <p className="flex justify-center md:text-xl text-sm font-normal font-inria-serif">{book.title}</p>
                                </Link>
                                <p className="flex justify-center text-black/70 md:text-sm text-xs font-normal font-inria-serif leading-loose">{book.bookAuthor}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={handleNext}
                    className="hidden md:flex absolute md:right-32 right-0 p-2 transition-opacity opacity-100 hover:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <img
                        src={arrow_right}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
                        alt="Scroll right"
                    />
                </button>
            </div>
        </div >
    );
}

export default PopularBooks_card