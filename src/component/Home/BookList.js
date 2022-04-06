import React from 'react';
import './BookList.css';
import { useSelector } from 'react-redux';
import Book from '../Book/Book';

const BookList = () => {
  const books = useSelector((state) => state.reducer);
  console.log(books);
  return (
    <ul className="booklist-box">
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
};

export default BookList;
