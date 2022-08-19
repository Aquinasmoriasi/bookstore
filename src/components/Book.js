import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <li key={book.id}>
    <div className="bookItem">
      <p>
        <span>Action</span>
        <span>{book.title}</span>
        <span>{book.author}</span>
      </p>
    </div>
    <button type="button">Comment</button>
    <button type="button">Edit</button>
    <button type="button">Remove</button>
  </li>
);

Book.propTypes = {
  book: PropTypes.objectOf,
};

Book.defaultProps = {
  book: {},
};

export default Book;
