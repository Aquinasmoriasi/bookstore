import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from './redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const dispatch = useDispatch();
  const onSubmit = (e) => {
    const id = uuidv4();
    e.preventDefault();
    if (title && author) {
      dispatch(
        addBook(id, title, author),
      );
    }
    setTitle('');
    setAuthor('');
  };
  return (
    <div className="addBook">
      <h2>ADD NEW BOOK</h2>
      <form action="#" onSubmit={onSubmit}>
        <input type="text" name="title" placeholder="Book title" onChange={onTitleChange} value={title} />
        <input type="text" name="author" placeholder="Author" onChange={onAuthorChange} value={author} />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
