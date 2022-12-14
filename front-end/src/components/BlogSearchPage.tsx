import React, { useEffect, useState } from 'react';

import axios from 'axios';

import BlogCard from './BlogCard';
import Pagination from './Pagination';

import './BlogSearchPage.scss';

import moment from "moment";

interface Blog {
  id: number;
  title: string;
  content: string;
  image: string;
  published_at: string;
  slug: string;
};


const BlogSearchPage = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [count, setCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);


  // Get total of blogs in the db to setup number of pages dynamically:
  const getTotalOfBlogs = async() => {
    return axios.get('/blogs')
      .then((res) => {
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
        setBlogs(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const data = Array.from(blogs); // => It was throwing an error about map in production mode, even tho blogs is an array, so fixed it with this.

  const blogList = data?.map((blog: Blog) => {
    return (
      <BlogCard
        key={blog.id}
        id={blog.id}
        title={blog.title}
        content={blog.content}
        image={blog.image}
        published_at={moment(blog.published_at).format('MMMM Do YYYY, h:mm:ss a')}
        slug={blog.slug}
      />
    )
  });

  useEffect(() => {
    getTotalOfBlogs();
  });

  useEffect(() => {
    loadBlogs(currentPage);
  }, [currentPage]);


  return (
    <div className='main_page'>
      <span className='title'>Explore our HeyAuto blogs <i className="fa-sharp fa-solid fa-caret-down"></i></span>

      <div className='blogs_container'>
        {blogList}
      </div>
      
      <div className='pagination'>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} blogsCount={count} />
      </div>
    </div>
  );
}
 
export default BlogSearchPage;