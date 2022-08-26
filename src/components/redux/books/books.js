/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export const addBook = createAsyncThunk(
  ADD_BOOK,
  async (book) => {
    fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/DKAkmwINVPX8zbGFKB5E/books', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(book),
    });
    return {
      book: [
        book.item_id,
        [{
          author: book.author,
          title: book.title,
          category: book.category,
        }],
      ],
    };
  },
);

const initialState = {
  books: [],
  status: null,
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/DKAkmwINVPX8zbGFKB5E/books');
    return response.json();
  },
);

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {
    [addBook.fulfilled]: (action) => action.payload,
    [fetchBooks.fulfilled]: (state, action) => {
      state.status = 'sucess';
      state.books = action.payload;
    },
    [fetchBooks.rejected]: (state) => {
      state.status = 'rejected';
    },
  },
});

// const bookReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_BOOK:
//       return [
//         ...state,
//         action.content,
//       ];
//     case REMOVE_BOOK:
//       return state.filter((book) => (book.id !== action.id));
//     default: return state;
//   }
// };

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default bookSlice;
