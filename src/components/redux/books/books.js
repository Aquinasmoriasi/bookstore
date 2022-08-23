import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [{
  title: 'Uncle Tom\'s Cabin',
  author: 'Harriet Beacher Stowe',
  id: uuidv4(),
},
{
  title: 'Cannot Hurt Me ',
  author: 'David Goggins',
  id: uuidv4(),
},
{
  title: 'When We Met',
  author: 'Danielle Steele',
  id: uuidv4(),
},
{
  title: 'Gifted Hands',
  author: 'Ben Carson',
  id: uuidv4(),
}];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.content,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => (book.id !== action.id));
    default: return state;
  }
};

export const addBook = (id, title, author) => ({
  type: ADD_BOOK,
  content: {
    id,
    title,
    author,
  },
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default bookReducer;
