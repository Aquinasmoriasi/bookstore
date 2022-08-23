const UNDER_CONSTRUCTION = 'Under_Construction';

const categoriesReducer = (state = '', action) => {
  switch (action.type) {
    case UNDER_CONSTRUCTION:
      return UNDER_CONSTRUCTION;
    default: return state;
  }
};

export const addCategory = () => ({
  type: UNDER_CONSTRUCTION,
});

export default categoriesReducer;
