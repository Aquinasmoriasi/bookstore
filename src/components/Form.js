import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from './redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

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

  const dispatch = useDispatch();
  const onSubmit = (e) => {
    const id = uuidv4();
    e.preventDefault();
    if (title.trim() && author.trim()) {
      dispatch(
        addBook(id, title, author, category),
      );
    }
    setTitle('');
    setAuthor('');
    setCategory('General');
  };
  return (
    <div className="addBook">
      <h2>ADD NEW BOOK</h2>
      <form action="#" onSubmit={onSubmit}>
        <input type="text" name="title" placeholder="Book title" onChange={onTitleChange} value={title} />
        <input type="text" name="author" placeholder="Author" onChange={onAuthorChange} value={author} />
        <select name="Category" onClick={onCategoryChange}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
