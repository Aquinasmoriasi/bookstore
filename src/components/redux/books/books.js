const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: action.content };
    case REMOVE_BOOK:
      return { ...state, books: state.filter(state.id !== action.id) };
    default: return state;
  }
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  content: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default bookReducer;
