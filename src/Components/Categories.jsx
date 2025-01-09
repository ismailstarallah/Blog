import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
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

    const handleCategoryClick = (category, subcategory = "") => {
        navigate(`/books?page=${1}&category=${category}&subcategory=${subcategory}`);

    };

    return (
        <div className="flex flex-wrap gap-4 p-4">
            {categories.map((category, id) => (
                <button onClick={() => handleCategoryClick(category, "")} key={id} className="bg-gray-200 p-2 rounded-md shadow-md">
                    <p className="text-lg font-medium">{category}</p>
                </button>
            ))}
        </div>
    );
}

export default Categories;