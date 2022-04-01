import React from 'react';
import Navbar from '../Navbar/Navbar';
import BookForm from './BookForm';
import BookList from './BookList';

const Bookcontainer = () => (
  <div>
    <Navbar />
    <BookList />
    <BookForm />
  </div>
);

export default Bookcontainer;
