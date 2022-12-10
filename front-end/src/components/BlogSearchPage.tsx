import React, { useEffect, useState } from 'react';

import axios from 'axios';

import BlogCard from './BlogCard';

const BlogSearchPage = () => {
  const [blogs, setBlogs] = useState<any>(null);
  const [count, setCount] = useState<number>(0);

  // Get total of blogs in the db to setup number of pages dynamically:
  const getTotalOfBlogs = async() => {
    return axios.get('/blogs')
      .then((res) => {
        console.log('blogs COUNT', res.data.count);
        setCount(res.data.count);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // Load the blogs:
  const loadBlogs = async(page: number) => {
    return axios.get(`/blogs/${page}`)
      .then((res) => {
        console.log('blogs data', res.data);
        setBlogs(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  interface Blog {
    id: number;
    title: string;
    content: string;
    image: string;
    published_at: string;
    slug: string;
  }

  const blogList = blogs?.map((blog: Blog) => {
    return (
      <BlogCard
        key={blog.id}
        id={blog.id}
        title={blog.title}
        content={blog.content}
        image={blog.image}
        published_at={blog.published_at}
        slug={blog.slug}
      />
    )
  });

  useEffect(() => {
    loadBlogs(1); // => It will load the first six blogs when you access the page the first time.
    getTotalOfBlogs();
  }, []);


  return (
    <div>
      Explore our HeyAuto blogs <i className="fa-sharp fa-solid fa-caret-down"></i>
    
      <button onClick={() => loadBlogs(2)}>Load 2</button>
      <button onClick={() => loadBlogs(3)}>Load 3</button>
      <button onClick={() => loadBlogs(4)}>Load 4</button>

      {blogList}
    </div>
  );
}
 
export default BlogSearchPage;