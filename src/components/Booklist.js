import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { removeBook } from './redux/books/books';

const Booklist = () => {
  const books = useSelector((state) => state.book);

  const dispatch = useDispatch();
  const onClick = (e) => {
    const { id } = e.target.parentNode.parentNode.parentNode;
    dispatch(
      removeBook(id),
    );
  };

  return (
    <ul>
      {books.map((book) => (
        <Book key={book.id} book={book} remove={onClick} />
      ))}
    </ul>
  );
};

export default Booklist;
