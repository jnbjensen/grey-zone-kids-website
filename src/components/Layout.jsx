/* eslint-disable react/prop-types */
import React from 'react';

function Layout({ children }) {
  return (
    <div>
      {/* Insert navbar here */}
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
