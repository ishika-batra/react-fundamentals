import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { books } from './books';
import Book from './Book';

const BookList = () => {
  return (
    <>
      <h1>Best Selling Books</h1>
      <section className="booklist">
        {books.map((book, index) => {
          // return <Book potato={book} key={book.id} />;
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
