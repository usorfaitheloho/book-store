import API_URL from "../../Database/database";

const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';
const GET_BOOK = 'book-store/books/GET_BOOK';

const initialState = [];

export const addbook = (book) => async(dispatch) => {
  await fetch(API_URL)
    .then((response) => response.json())
    .then(
      () => dispatch({ type: ADD_BOOK, payload:book }),
      () => dispatch({ type: ADD_BOOK, payload:null }), 
    );
};

export const getBooks = () => async (dispatch) => {
  await get(API_URL)
    .then((books) => books.json())
    .then(
      (data) => dispatch({ type: GET_BOOK, payload: data }),
      () => dispatch({ type: GET_BOOK, payload:[] }), 
    );
};

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    
      case GET_BOOK: {
        return [...state, action.payload];
      }
      
      default:
      return state;
  }
};

export default reducer;
