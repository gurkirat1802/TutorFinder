import React from 'react';
import Blogsdata from "../Data/Blogsdata";
import BlogCard from '../Cards/BlogCard';

const Blogs = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto">
        {Blogsdata && Blogsdata.map((blog, index) => (
          <BlogCard key={index} id={blog.id} title={blog.title} image={blog.image} text={blog.text} />
        ))}
      </div>
    </>
  );
}

export default Blogs;