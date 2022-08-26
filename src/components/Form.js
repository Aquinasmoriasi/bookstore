/* eslint-disable camelcase */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from './redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const categories = ['Fiction', 'Science', 'Arts', 'Math', 'History', 'Romance', 'Geography'];
  const onCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const item_id = uuidv4();
    const book = {
      item_id, title, author, category,
    };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
    setCategory('General');
  };
  return (
    <div className="addBook">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Book Title" onChange={onTitleChange} name="title" value={title} />
        <input type="text" placeholder="Book Author" onChange={onAuthorChange} name="author" value={author} />
        <select name="Category" onClick={onCategoryChange}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Form;
