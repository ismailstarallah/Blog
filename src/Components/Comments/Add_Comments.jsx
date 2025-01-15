import { useState } from 'react'

const Add_Comments = ({ id_book, setComments }) => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const postId = id_book;


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('comment', comment);
            formData.append('idPost', postId);
            const response = await fetch('http://localhost/php-blog/api.php?path=addComment', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();

            if (data.success) {
                setSuccess('Comment added successfully!');
                setComments((prev) => {
                    return [...prev, { nameUser: name, comment: comment }];
                });
                setError(null);
                setName('');
                setComment('');
            } else {
                setError('Failed to add comment.');
            }
        } catch (error) {
            setError('An error occurred while adding the comment.');
        }
    };

    /** usehookform """to learn""" */
    return (
        <div>
            <p className="text-black text-4xl font-medium font-['Inter'] leading-[64px]">Add Review</p>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-4'>
                <div className="flex flex-col px-2">
                    <label htmlFor="" className="pb-4 text-black text-[15px] font-medium font-['Inter']">NAME</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="flex-grow h-12 border bg-[#d9d9d9]/0 rounded-[10px] border-black text-black/70 active:bg-[#f3f3f3] text-base font-extralight font-['Inter'] leading-[5px] px-4"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col px-2">
                    <label htmlFor="" className="pb-4 text-black text-[15px] font-medium font-['Inter']">Your Review</label>
                    <textarea
                        className="flex-grow h-16 border w-full bg-[#d9d9d9]/0 rounded-[10px] border-black text-black/70 active:bg-[#f3f3f3] font-extralight font-['Inter'] px-4"
                        id="multiLineInput" name="multiLineInput" rows="10" cols="30"
                        placeholder="Enter your comment here"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />
                </div>
                <button type='submit' className="w-full h-10 bg-[#e8dbdb] rounded-[10px] active:bg-[#E78A8A]/50">Submit</button>
            </form>
        </div >

    )
}

export default Add_Comments