import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';

const SingleBlogCard = ({ blogsdata }) => {

    const { id } = useParams();
    const blog = blogsdata.find(blog => blog.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!blog) {
        return (
            <div className="container">
                <h2 className="text-3xl font-semibold text-center mt-24">No details found</h2>
            </div>
        );
    }
    return (
        <div>
            <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg px-10 py-5">
                <img
                    alt=""
                    src={blog.image}
                    className="mt-20 h-56 w-96 object-cover mx-auto"
                />
                <div class="bg-white p-4 sm:p-6">
                    <a href="#">
                        <h3 class="mt-0.5 text-2xl font-semibold">{blog.title}</h3>
                    </a>
                    <p class="mt-5 text-xl text-justify">
                        {blog.fullblog}
                    </p>
                </div>
            </article>
        </div>
    )
}

export default SingleBlogCard;