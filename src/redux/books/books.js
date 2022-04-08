import Database from "../../Database/database";
import { func } from 'prop-types';

const ADD_BOOK_REQUEST = 'book-store/books/ADD_BOOK';
const ADD_BOOK_SUCCESS = 'book-store/books/REMOVE_BOOK';
const ADD_BOOK_FAIL = 'bookstore/books/ADD_BOOK_FAIL'

const GET_BOOKS_REQUEST = 'book-store/books/GET_BOOKS_REQUEST';
const GET_BOOKS_SUCCESS = 'bookstore/books/GET_BOOKS_SUCCESS';
const GET_BOOKS_FAIL = 'bookstore/books/GET_BOOKS_FAIL';

const REMOVE_BOOK_REQUEST = 'bookstore/books/REMOVE_BOOK_REQUEST';
const REMOVE_BOOK_SUCCESS = 'bookstore/books/REMOVE_BOOK_SUCCESS';
const REMOVE_BOOK_FAIL = 'bookstore/books/REMOVE_BOOK_FAIL';


const initialState = [{
  loading: false,
  booksArr: {},
  error: '',
}];

export const addBookRequest = () => ({
  type: ADD_BOOK_REQUEST,
})

export const addBookSuccess = (booksArr) =>({
  type: ADD_BOOK_SUCCESS, 
  payload: booksArr,
})

export const addBookFail = (error) =>({
  type: ADD_BOOK_FAIL, 
  payload: error,
})

export function addbook(book) {
  return (dispatch) => {
    dispatch(addBookRequest());
    const { 
      id, title, author, category,
    } = book;
    Database.addBooks(id, title, author, category)
    .then(() => {
      const bookNew = {};
      bookNew[id] = [{ title, author, category }];
      dispatch(addBookSuccess(bookNew));
    })
    .catch((error) => {
      dispatch(addBookFail(error.message));
    });
  };
}

export const getBookRequest = () => ({
  type: GET_BOOKS_REQUEST,
})

export const getBookSuccess = (booksArr) =>({
  type: GET_BOOKS_SUCCESS, 
  payload: booksArr,
})

export const getBooksFail = (error) =>({
  type: GET_BOOKS_FAIL, 
  payload: error,
})

export function getBooks() {
  return (dispatch) => {
    dispatch(getBookRequest());
    Database.getbooks()
    .then((book) => {
      dispatch(getBookSuccess(book));
    })
    .catch((error) => dispatch(getBooksFail(error.message)));
  };
}

export const removeBookRequest = () => ({
  type: REMOVE_BOOK_REQUEST,
});

export const removeBookSuccess = (id) => ({
  type: REMOVE_BOOK_SUCCESS,
  payload: id,
});

export const removeBookFail = (error) => ({
  type: REMOVE_BOOK_FAIL,
  payload: error,
});

export const removeBooks(id) {
  return (dispatch) => {
    dispatch(removeBookRequest());
    Database.delBook(id)
    .then(() => {
      dispatch(removeBookSuccess(id));
    })
    .catch((error) => {
      dispatch(removeBookFail(error.message));
    });
  };
}

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
