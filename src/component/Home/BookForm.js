import React from 'react';

const BookForm = () => (
  <form>
    <h3>ADD NEW BOOK</h3>
    <div>
      <label htmlFor="book-title">
        <input type="text" placeholder="Book title" />
      </label>
      <label htmlFor="categories">
        <select>
          <option>Categories</option>
          <option>Fiction</option>
          <option>Non-fiction</option>
          <option>Poetry</option>
        </select>
      </label>
      <button type="submit">Add Book</button>
    </div>
  </form>
);

export default BookForm;
