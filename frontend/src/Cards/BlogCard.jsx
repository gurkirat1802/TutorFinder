import React from 'react';
import { Link } from "react-router-dom";

const BlogCard = ({ id, title, image, text }) => {
    return (
        <div className="max-w-4xl mx-auto mb-10 p-6 bg-white shadow-lg rounded-lg mt-20">
            <div className="flex items-center justify-between">
                <div className="w-1/3">
                    <Link to={`/SingleBlog/${id}`}>
                        <img src={image} alt="Blog Image" className="w-[250px] h-[200px] rounded-lg" />
                    </Link>
                </div>
                <div className="w-2/3 px-6">
                    <Link to={`/SingleBlog/${id}`} className="text-black no-underline">
                        <h1 className="text-2xl font-bold mb-4 cursor-pointer">{title}</h1>
                    </Link>
                    <p className="text-gray-700 leading-relaxed">{text}</p>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;