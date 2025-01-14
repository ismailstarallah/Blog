import arrow_left from '../../assets/arrow_left.png'
import arrow_right from '../../assets/arrow_right.png'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Category_card = () => {
    const [categories, setCategories] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

        useEffect(() => {
            const fetchCategories = async () => {
                try {
                    const response = await fetch('http://localhost/php-blog/api.php?path=getCategories');
                    if (!response.ok) {
                        throw new Error('Erreur lors de la récupération des catégories');
                    }
                    const data = await response.json();
                    if (data.success) {
                        setCategories(data.data);
                    }
                } catch (error) {
                    console.error('Erreur:', error);
                }
            };

            fetchCategories();
        }, []);

    // Gestion des flèches
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, categories.length - 4));
    };
    const handleCategoryClick = (category) => {
        navigate(`/books?page=${1}&category=${category}`);
    };
    return (
        <div className="flex flex-col items-center py-16">
            <div className="relative flex items-center w-full px-48 overflow-x-auto">
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className={`absolute left-32 p-2 z-10 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
                        }`}>
                    <img src={arrow_left} className='w-16 h-16' />
                </button>
                {/* Liste des catégories */}
                <div className="overflow-hidden w-full">
                    <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
                        {categories.map((category, id) => (
                            <div key={id} className="flex flex-col items-center w-1/4 px-4">
                                <div className="w-48 h-48 bg-[#8f97ca]/60 rounded-full flex items-center justify-center">
                                    <img src="https://via.placeholder.com/137x147" alt={category} className="w-16 h-16 rounded-full"/>
                                </div>
                                <p className="flex w-28 h-[30px] justify-center text-black text-xl font-normal font-inria-serif leading-[38.40px]">{category}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Flèche droite */}
                <button
                    onClick={handleNext}
                    disabled={currentIndex >= categories.length - 4}
                    className={`absolute right-32 p-2  transition-opacity ${currentIndex >= categories.length - 4 ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                >
                    <img src={arrow_right} className='w-16 h-16' />
                </button>
            </div>
        </div>
    );
}

export default Category_card