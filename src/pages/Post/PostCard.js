import React, { useEffect, useState } from 'react';
import './PostCard.css'

const PostCard = ({ post }) => {

    const [formatedDate, setFormatedDate] = useState("");

    useEffect(() => {
        if (post.createdAt) {
            let date = post.createdAt;
            date /= 1000
            const dateInstance = new Date(date)
            setFormatedDate(`${dateInstance.getDate()}-${dateInstance.getMonth() + 1}-${dateInstance.getFullYear()}`)
        }
    }, [post])

    console.log(formatedDate)
    return (
        <div className='border w-96 m-4 p-4 rounded-md border-black-400'>
            <h3 className='text-lg font-bold'>{post.title}</h3>
            <div className='text-state-500 text-sm text-gray-700 flex justify-between py-2'>
                <p>Author Name: {post.author.name}</p>
                <p>Date: {formatedDate}</p>
            </div>
            <p className='text-sm'>{post.content}</p>
        </div>
    );
};

export default PostCard;