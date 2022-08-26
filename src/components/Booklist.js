import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { fetchBooks, removeBook } from './redux/books/books';
import Book from './Book';

const Booklist = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const onClickHandler = (e) => {
    const { id } = e.target.parentNode.parentNode.parentNode;
    dispatch(removeBook(id));
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <ul>
      {books.map((book) => (
        <Book
          id={book.item_id}
          key={book.item_id}
          book={book}
          remove={onClickHandler}
        />
      ))}
    </ul>
  );
};

export default Booklist;
