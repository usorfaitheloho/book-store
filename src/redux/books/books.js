const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';

const initialState = [];

export const addbook = (payload) => ({
  index: 0,
  type: ADD_BOOK,
  payload,
});

export const removebook = (payload) => ({
  index: 0,
  type: REMOVE_BOOK,
  payload,
});

const reducer = (action, state = initialState) => {
  switch (action) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.map((book, index) => {
        if (action.index === index) state.splice(index - 1, 1);
        return book;
      });
    default:
      return state;
  }
};

export default reducer;
