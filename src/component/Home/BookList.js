import React from 'react';
import './BookList.css';
import { useSelector } from 'react-redux';
import Book from './Book/Book';

const BookList = () => {
  const books = useSelector((state) => state.reducer);
  return (
    <ul className="booklist-box">
      {
      books.length ? books.map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      )) : <h2 className="notice">No books to display!!</h2>
      }
    </ul>
  );
};

export default BookList;
