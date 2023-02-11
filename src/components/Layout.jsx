/* eslint-disable react/prop-types */
import React from 'react';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div>
        {/* Content for each page */}
        { children }
      </div>
      <footer>
        <p>
          Copyright 2023 Grey Zone Kids
        </p>
      </footer>
    </div>
  );
}

export default Layout;
