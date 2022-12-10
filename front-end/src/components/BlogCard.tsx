import React from 'react';

import DOMPurify from 'dompurify';

import { useNavigate } from 'react-router-dom';

import './BlogCard.scss';

/*
Note about injecting 'content' into JSX:
The easiest way would've been to use 'dangerouslySetInnerHTML',
since in this case, we know what is the HTML string we are injecting,
but to be safe, I used DOMpurify to sanitize the data before injecting it.
*/

interface BlogCardProps {
  id: number;
  title: string;
  content: any;
  image: string;
  published_at: string;
  slug: string;
};


const BlogCard = (props: BlogCardProps) => {
  const navigate = useNavigate();

  const navigateToBlogPage = () => {
    navigate(`/${props.slug}`);
  };

  return (
    <div className='one_card' onClick={navigateToBlogPage}>

      <img
        src={props.image}
        alt='blog_card_image'
      />

      <span className='date'><i className="fa-solid fa-calendar-days"></i> {props.published_at}</span>

      <span className='content' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.content)}}></span>

    </div>

  );
}
 
export default BlogCard;
