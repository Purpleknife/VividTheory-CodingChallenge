import React from 'react';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import BlogSearchPage from './components/BlogSearchPage';
import SingleBlogPage from './components/SingleBlogPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BlogSearchPage />} />
        <Route path='/:slug' element={<SingleBlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;
