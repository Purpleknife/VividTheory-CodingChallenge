import React, { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';

import moment from "moment";

import DOMPurify from 'dompurify';

import './SingleBlogPage.scss';

interface Blog {
  id: number;
  title: string;
  content: string;
  image: string;
  published_at: string;
  slug: string;
};

const SingleBlogPage = () => {
  const [singleBlog, setSingleBlog] = useState<Blog | null>(null);

  const navigate = useNavigate();

  const params = useParams(); // => To get the slug from the URL.
  

  // Fetch the data of a specific blog:
  const loadSingleBlog = async() => {
    return axios.get(`/${params.slug}`)
      .then((res) => {
        console.log('single blog', res.data);
        setSingleBlog({
          id: res.data.id,
          title: res.data.title,
          content: res.data.content,
          image: res.data.image,
          published_at: moment(res.data.published_at).format('MMMM Do YYYY, h:mm:ss a'),
          slug: res.data.slug
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    loadSingleBlog();
  }, []);


  return (
    <>
      <button className='back' onClick={() => navigate('/')}>Back to Home Page</button>
      
      {singleBlog &&
      
        <div className='single_blog'>
          <img
            src={singleBlog.image}
            alt='blog_image'
          />
          
          <span className='title'>{singleBlog.title}</span>
          <p className='date'><i className="fa-solid fa-calendar-days"></i>{singleBlog.published_at}</p>
        

          <div className='blog_content' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(singleBlog.content)}}></div>
        </div>
      }
    </>
  );
}

export default SingleBlogPage;