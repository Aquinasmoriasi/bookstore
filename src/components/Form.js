/* eslint-disable camelcase */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from './redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('GENERAL');
  const dispatch = useDispatch();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const categories = ['General', 'Fiction', 'Science', 'Arts', 'Math', 'History', 'Romance', 'Growth', 'Geography'].sort();
  const onCategoryChange = (e) => {
    setCategory(e.target.value.toUpperCase());
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const item_id = uuidv4();
    const book = {
      item_id, title, author, category,
    };
    if (title.trim() && author.trim()) {
      dispatch(addBook(book));
    }
    setTitle('');
    setAuthor('');
    setCategory('');
  };
  return (
    <div className="input-form">
      <hr />
      <div className="addBook">
        <h2>ADD NEW BOOK</h2>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Book Title" onChange={onTitleChange} name="title" value={title} />
          <input type="text" placeholder="Book Author" onChange={onAuthorChange} name="author" value={author} />
          <select name="Category" onClick={onCategoryChange}>
            <option value="General">category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <button type="submit">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
