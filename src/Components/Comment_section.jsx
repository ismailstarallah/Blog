import React from 'react'
import Add_Comments from './Comments/Add_Comments'
import Show_Comments from './Comments/Show_Comments'
import { useState } from 'react'

const Comment_section = ({ id_book }) => {
    const [comments, setComments] = useState([]);

    return (
        <>
            <div className="w-full md:px-8 h-auto flex flex-col gap-4">
                <Show_Comments id_book={id_book} comments={comments} setComments={setComments} />
            </div>
            {/* Right Sidebar */}
            <div className="block mt-3 md:w-[50%]">
                <Add_Comments id_book={id_book} setComments={setComments} />
            </div>
        </>
    )
}

export default Comment_section