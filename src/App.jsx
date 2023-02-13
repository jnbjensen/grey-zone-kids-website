import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Resources from './pages/Resources';
import Blog from './pages/Blog';
import Book from './pages/Book';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/book" element={<Book />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
