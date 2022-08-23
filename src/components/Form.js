/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import store from './redux/configureStore';
// import { addBook } from './redux/books/books';

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
    e.preventDefault();
    dispatch({
      type: 'ADD_BOOK',
      content: {
        id: uuidv4(),
        title,
        author,
      },
    });
    console.log(store.getState());
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
