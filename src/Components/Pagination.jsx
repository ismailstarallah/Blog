import arrow_left from '../assets/arrow_left_2.png';
import arrow_right from '../assets/arrow_right_2.png';
import { useNavigate } from 'react-router-dom';



const Pagination = ({ currentPage, totalPages, category, subcategory }) => {
    const navigate = useNavigate();

    const paginate = (pageNumber, category, subcategory = "") => {
        navigate(`/books?page=${pageNumber}&category=${category}&subcategory=${subcategory}`);
        window.scrollTo({ top: 100, behavior: "smooth" });
    };

    return (
        <div className="flex justify-center mt-4">
            {currentPage > 1 && (
                <button
                    onClick={() => paginate(currentPage - 1, category, subcategory)}
                    className="px-3 py-1 mx-1"
                >
                    <img src={arrow_left} className='w-4 h-4' />
                </button>
            )}
            {totalPages > 1 ?
                Array.from({ length: totalPages }, (_, index) => index + 1)
                    .filter(page => Math.abs(page - currentPage) <= 1 || page === 1 || page === totalPages)
                    .map((page, index, array) => (
                        <div key={page}>
                            {index > 0 && page - array[index - 1] > 1 && (
                                <span className="px-3 py-1 mx-1">...</span>
                            )}
                            <button
                                onClick={() => paginate(page, category, subcategory)}
                                className={`px-3 py-1 mx-1 rounded-[15px] border border-black  ${page === currentPage ? 'bg-black text-white' : 'bg-white text-black'}`}
                            >
                                {page}
                            </button>
                        </div>
                    )) : ""}
            {currentPage < totalPages && (
                <button
                    onClick={() => paginate(currentPage + 1, category, subcategory)}
                    className="px-3 py-1 mx-1"
                >
                    <img src={arrow_right} className='w-4 h-4' />
                </button>
            )}
        </div>
    )
}

export default Pagination