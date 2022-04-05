const CATEGORIES = 'book-store/categories/CATEGORIES';

const initialState = [];

export const categoriesStatus = (payload) => ({
  index: 0,
  type: CATEGORIES,
  payload,
});

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES:
      return 'under construction';
    default:
      return state;
  }
};

export default categoriesReducer;
