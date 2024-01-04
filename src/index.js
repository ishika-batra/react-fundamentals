import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const firstBook = {
  author: 'Keira Miki',
  title: 'Ikigai',
  img: './images/book1.jpg',
};

const secondBook = {
  author: 'George S. Clason',
  title: 'The Richest Man In Babylon',
  img: 'https://m.media-amazon.com/images/I/71Vs-VNGhXL._AC_UY327_FMwebp_QL65_.jpg',
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />

      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author} </h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
