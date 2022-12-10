import React from 'react';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import BlogSearchPage from './components/BlogSearchPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BlogSearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;
