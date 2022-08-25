import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

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
    [fetchBooks.pending]: (state) => {
      let { status } = state;
      status = 'pending';
      return status;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      let { books } = state;
      let { status } = state;
      status = 'sucess';
      books = action.payload;
      return { status, books };
    },
    [fetchBooks.pending]: (state) => {
      let { status } = state;
      status = 'rejected';
      return status;
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

export const addBook = (id, title, author, category) => ({
  type: ADD_BOOK,
  content: {
    id,
    title,
    author,
    category,
  },
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default bookSlice;
