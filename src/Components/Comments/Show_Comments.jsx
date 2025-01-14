import React, { useEffect, useState } from 'react'

const Show_Comments = ({ id_book, comments, setComments }) => {
    const [nbrcomments, setNbrComment] = useState(0);
    const [error, setError] = useState(null);
    const [limit, setLimits] = useState(2);


    useEffect(() => {
        const fetchComment = async () => {
            try {
                const response = await fetch(`http://localhost/php-blog/api.php?path=showComments&idPost=${id_book}&limit=${limit}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setComments(data.data);
                setNbrComment(data.totalComments);
            } catch (error) {
                setError(error.message);
            }
        }
        fetchComment();
    }, [id_book, limit])

    if (error) {
        return <div>Error: {error}</div>
    }


    return (
        <>
            <div className='flex flex-col gap-4 p-4'>
                <h2 className="px-8 text-black text-4xl font-medium font-['Inter'] leading-[64px]">Recent Feedbacks</h2>
                {nbrcomments == 0 && <p>No comments yet</p>}
                {comments.map((comment, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        <div className="flex flex-row mx-10 p-2 bg-[#e8dbdb] rounded-[20px] border border-black">
                            <img src="https://as1.ftcdn.net/jpg/07/03/86/10/1000_F_703861066_gNOwqrKENcaNU2eDH2El2fyhja6Nz6hv.webp" alt="user" className="w-1/6 mx-auto my-auto rounded-full" />
                            <div className="flex flex-col w-3/4">
                                <p className="text-black text-xl font-normal font-['Inter'] leading-8">{comment.nameUser}</p>
                                <p className="text-black/75 text-[10px]-sm font-normal font-['Inter'] leading-none">{comment.comment}</p>
                            </div>
                        </div>

                    </div>
                ))}
                {limit < nbrcomments && <button onClick={() => setLimits(limit + 5)} className="mx-auto p-2 font-['Inter']">Read More...</button>}
            </div >
        </>
    )
}

export default Show_Comments