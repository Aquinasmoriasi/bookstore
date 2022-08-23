/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import Book from './Book';

const Booklist = ({ books }) => (
  <ul>
    {books.map((book) => (
      <Book key={book.id} book={book} />
    ))}
  </ul>
);

export default Booklist;
