/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, remove }) => {
  const {
    item_id, title, author, category,
  } = book;
  return (
    <li id={item_id} key={item_id}>
      <div className="bookItem">
        <p>
          <span>{category}</span>
          <span>{title}</span>
          <span>{author}</span>
        </p>
        <div>
          <button type="button">Comments</button>
          <button type="button" onClick={remove}>Remove</button>
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
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  remove: PropTypes.func.isRequired,
};

export default Book;
