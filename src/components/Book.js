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
      <div>
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
    <div>
      <p>
        <span>50%</span>
        <span>Complete</span>
      </p>
    </div>
    <div>
      <p>
        <span>Current Chapter</span>
        <span>Chapter</span>
        <button type="button">Update Progress</button>
      </p>
    </div>
  </li>
);

Book.propTypes = {
  book: PropTypes.objectOf,
};

Book.defaultProps = {
  book: {},
};

export default Book;
