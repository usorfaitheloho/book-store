import axios from "axios";
import API_URL from "../../Database/database";

const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';

const initialState = [];

export const addbook = (book) => async(dispatch) => {
  await axios(API_URL)
    .then((response) => response.json())
    .then(
      () => dispatch({ type: ADD_BOOK, payload:book }),
      () => dispatch({ type: ADD_BOOK, payload:null }), 
    );
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;
