import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const navigate = useNavigate();

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

    const handleflecheCategoryClick = async (categoryId) => {
        if (activeCategory === categoryId) {
            setActiveCategory(null); // Fermer le dropdown si déjà ouvert
            return;
        }

        setActiveCategory(categoryId);
        try {
            const response = await fetch(
                `http://localhost/php-blog/api.php?path=getSubCategories&categoryId=${categoryId}`
            );
            if (!response.ok) {
                throw new Error("Erreur lors de la récupération des sous-catégories");
            }
            const data = await response.json();
            if (data.success) {
                setSubcategories(data.data);
            }
        } catch (error) {
            console.error("Erreur:", error);
        }
    };

    const handleCategoryClick = (category, subcategory = "") => {
        navigate(`/books?page=${1}&category=${category}&subcategory=${subcategory}`);
        window.scrollTo({ top: 100, behavior: "smooth" });
    };

    return (
        <div className="p-4">
            <div className="space-y-4">
                {categories.map((category) => (
                    <div key={category.id} className="relative">
                        {/* Category Button */}
                        <button className="flex items-center justify-between w-full text-xl">
                            <span onClick={() => handleCategoryClick(category.title)}
                                className="text-gray-700 hover:text-gray-500 pl-2 font-bold font-inria-serif">
                                {category.title}
                            </span>
                            <span
                                onClick={() => handleflecheCategoryClick(category.id)}
                                className={`ml-2 text-gray-700 transform ${activeCategory === category.id ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </button>

                        {/* Dropdown for Subcategories */}
                        {activeCategory === category.id && (
                            <div className="ml-4 mt-2 space-y-2">
                                {subcategories.length > 0 ? (
                                    subcategories.map((subcategory) => (
                                        <div
                                            key={subcategory.id}
                                            className="text-gray-700 hover:text-gray-500 pl-2 font-bold font-inria-serif border-l-2 border-gray-300 cursor-pointer"
                                            onClick={() =>
                                                handleCategoryClick(category.title, subcategory.NAME)
                                            }
                                        >
                                            - {subcategory.NAME}
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500">No subcategories available</p>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;