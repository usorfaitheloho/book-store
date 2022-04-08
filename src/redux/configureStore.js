import { combineReducers, createStore,applyMiddleware } from 'redux';
import categoriesReducer from './categories/categories';
import thunk from 'redux-thunk';
import reducer from './books/books';

const root = combineReducers(
  {
    categoriesReducer,
    reducer,
  },
);

const store = createStore(root,applyMiddleware(thunk));
store.dispatch(reducer);
