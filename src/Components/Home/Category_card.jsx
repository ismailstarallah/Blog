import arrow_left from '../../assets/arrow_left.png'
import arrow_right from '../../assets/arrow_right.png'
import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Category_card = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const containerRef = useRef(null);

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

    const handleNext = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: containerRef.current.offsetWidth,
                behavior: 'smooth',
            });
        }
    };

    const handlePrev = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: -containerRef.current.offsetWidth,
                behavior: 'smooth',
            });
        }
    };

    const handleCategoryClick = (cat) => {
        navigate(`/books?page=${1}&category=${cat}`);
        window.scrollTo({ top: 100, behavior: "smooth" });

    };
    return (
        <div className="flex flex-col items-center py-12">
            <div className="relative flex items-center w-full px-4 md:px-40 overflow-x-hidden">
                {/* Bouton gauche */}
                <button
                    onClick={handlePrev}
                    className="hidden md:flex absolute left-0 md:left-28 p-2 z-10 transition-opacity opacity-100 hover:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <img
                        src={arrow_left}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
                        alt="Scroll left"
                    />
                </button>

                {/* Conteneur des catégories */}
                <div
                    ref={containerRef}
                    className="overflow-x-auto scrollbar-hide overflow-y-hidden w-full snap-x snap-mandatory"
                >
                    <div className="flex gap-2 transition-transform duration-300">
                        {categories.map((category, id) => (
                            <div
                                key={id}
                                className="flex flex-col items-center w-1/3 sm:w-1/3 min-[1039px]:w-1/4 px-2 sm:px-4 snap-center shrink-0"
                            >
                                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48 bg-[#8f97ca]/60 rounded-full flex items-center justify-center">
                                    <img
                                        onClick={() => handleCategoryClick(category.title)}
                                        src="https://via.placeholder.com/137x147"
                                        alt={category.title}
                                        className="w-16 h-16 rounded-full cursor-pointer"
                                    />
                                </div>
                                <p
                                    onClick={() => handleCategoryClick(category.title)}
                                    className="flex w-28 h-[30px] justify-center text-black text-xl font-normal font-inria-serif leading-[38.40px] cursor-pointer"
                                >
                                    {category.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bouton droit */}
                <button
                    onClick={handleNext}
                    className="hidden md:flex absolute md:right-28 right-0 p-2 transition-opacity opacity-100 hover:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <img
                        src={arrow_right}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
                        alt="Scroll right"
                    />
                </button>
            </div>
        </div>

    );
}

export default Category_card