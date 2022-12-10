import React from 'react';

import DOMPurify from 'dompurify';

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

  return (
    <div className='container'>
      <div className='one_card'>
        {props.published_at}

        <div className='content' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.content)}}></div>
        
      </div>
    </div>
  );
}
 
export default BlogCard;
