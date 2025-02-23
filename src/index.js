import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './route/main.js';
import About from './route/about.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='about' element={<About />} />
    </Routes>
  </BrowserRouter>
);


