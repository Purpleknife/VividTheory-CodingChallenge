import React from 'react';

interface BlogCardProps {
  id: number;
  title: string;
  content: string;
  image: string;
  published_at: string;
  slug: string;
}
const BlogCard = (props: BlogCardProps) => {
  return (
    <div>
      {props.title}
      Hello from BlogCard!
    </div>
  );
}
 
export default BlogCard;
