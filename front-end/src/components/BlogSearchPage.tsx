import React, { useEffect } from 'react';

import axios from 'axios';

const BlogSearchPage = () => {

  // Get total of blogs in the db to setup number of pages dynamically:
  const getTotalOfBlogs = async() => {
    return axios.get('/blogs')
      .then((res) => {
        console.log('blogs COUNT', res.data.count);
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
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    loadBlogs(1); // => It will load the first six blogs when you access the page the first time.
    getTotalOfBlogs();
  })


  return (
    <div>
      Explore our HeyAuto blogs <i className="fa-sharp fa-solid fa-caret-down"></i>
    
      <button onClick={() => loadBlogs(2)}>Load 2</button>
      <button onClick={() => loadBlogs(3)}>Load 3</button>
      <button onClick={() => loadBlogs(4)}>Load 4</button>
    </div>
  );
}
 
export default BlogSearchPage;