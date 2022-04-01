import React from 'react';
import BookForm from './BookForm';
import BookList from './BookList';
import './Bookcontainer.css';

const BookContainer = () => (
  <div className="row">
    <BookList />
    <BookForm />
  </div>
);

export default BookContainer;
