/* eslint-disable react/prop-types */
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className="h-full flex flex-col">
      <Navbar />
      <div>
        {/* Content for each page */}
        { children }
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
