import React from 'react';
import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Categories from './Categories';
import Books from './Allbooks';

const Nav = () => (
  <>
    <header>
      <h1>Bookstore CMS</h1>
      <nav>
        <Link to="/">Books</Link>
        <Link to="/Categories">Categories</Link>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/Categories" element={<Categories />} />
    </Routes>
  </>
);

export default Nav;
