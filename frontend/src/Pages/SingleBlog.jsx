import React from 'react';
import SingleBlogCard from '../Cards/SingleBlogCard';

const SingleBlog = ({ blogsdata }) => {
  return (
    <div>
      <SingleBlogCard blogsdata={blogsdata} />
    </div>
  );
}

export default SingleBlog;