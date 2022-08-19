import React from 'react';
import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Categories from './Categories';
import Books from './Books';

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
      <Route path="/Calculator" element={<Categories />} />
    </Routes>
    <footer>
      <p>&copy;App by Moriasi</p>
    </footer>
  </>
);

export default Nav;
