import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
// import { removeBook } from './redux/books/books';

const Booklist = () => {
  const books = [{ sw: 'ad' }];

  // const dispatch = useDispatch();
  // const onClick = (e) => {
  //   const { id } = e.target.parentNode.parentNode.parentNode;
  //   dispatch(
  //     removeBook(id),
  //   );
  // };

  return (
    <ul>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </ul>
  );
};

export default Booklist;
