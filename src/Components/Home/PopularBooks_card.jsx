import arrow_left from '../../assets/arrow_left.png'
import arrow_right from '../../assets/arrow_right.png'
import { useEffect, useState } from 'react'


const PopularBooks_card = () => {
    const [books, setbooks] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

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
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, books.length - 3));
    };

    return (
        <div className="flex flex-col items-center py-16">
            <div className="relative flex items-center w-full px-48 overflow-x-auto">
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className={`absolute left-32 pb-16 p-2 z-10 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
                        }`}>
                    <img src={arrow_left} className='w-16 h-16' />
                </button>
                <div className="overflow-hidden w-full">
                    <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 33}%)` }}>
                        {books.map((book, id) => (
                            <div key={id} className="flex flex-col w-1/3 px-4">
                                <div className="w-64 h-72 flex items-center justify-center">
                                    <img src={`http://localhost/php-blog/admin/upload/${book.image}`} alt={book.title} className="min-h-64 max-w-56 border rounded-[30px] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)] border-black object-cover" />
                                </div>
                                <p className="flex justify-center text-xl font-normal font-inria-serif">{book.title}</p>
                                <p className="flex justify-center text-black/70 text-sm font-normal font-inria-serif leading-loose">{book.bookAuthor}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={handleNext}
                    disabled={currentIndex >= books.length - 3}
                    className={`absolute right-32 p-2 pb-16 transition-opacity ${currentIndex >= books.length - 3 ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                >
                    <img src={arrow_right} className='w-16 h-16' />
                </button>
            </div>
        </div>
    );
}

export default PopularBooks_card