import React from 'react';
import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import { IoIosPerson } from 'react-icons/io';
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
      <IoIosPerson className="icon" />
    </header>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/Categories" element={<Categories />} />
    </Routes>
  </>
);

export default Nav;
