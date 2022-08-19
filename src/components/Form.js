import React from 'react';

const Form = () => (
  <div className="addBook">
    <h2>ADD NEW BOOK</h2>
    <form action="#">
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Author" />
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default Form;
