import React from 'react';
import Form from './Form';
import Booklist from './Booklist';

const Books = () => {
  const books = [{
    title: 'Uncle Tom\'s Cabin',
    author: 'Harriet Beacher Stowe',
    id: 1,
  }];
  return (
    <>
      <Booklist books={books} />
      <Form />
    </>
  );
};

export default Books;
