import React from 'react';
import './BookList.css';
import Book from '../Book/Book';

const BookList = () => (
  <ul className="booklist-box">
    <Book title="Hunger Games" author="Suzzanne Collins" genre="Action" complete="93%" chapter="33" />
    <Book title="Dune" author="Frank Helbert" genre="Science Fiction" complete="55%" chapter="12" />
    <Book title="Capital in the Twenty-First Century" author="Suzzanne Collins" genre="Suspense" complete="3%" chapter="27" />
  </ul>
);

export default BookList;
