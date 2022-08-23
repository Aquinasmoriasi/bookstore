const ADD_CATEGORY = 'bookstore/categories/ADD_CATEGORY';

const UNDER_CONSTRUCTION = 'Under_Construction';
const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return action.text;
    default: return state;
  }
};

export const addCategory = () => ({
  type: ADD_CATEGORY,
  text: UNDER_CONSTRUCTION,
});

export default categoriesReducer;
