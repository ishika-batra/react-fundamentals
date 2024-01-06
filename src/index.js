import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
  {
    author: 'Keira Miki',
    title: 'Ikigai',
    img: './images/book1.jpg',
    id: 1,
  },
  {
    author: 'George S. Clason',
    title: 'The Richest Man In Babylon',
    img: 'https://m.media-amazon.com/images/I/71Vs-VNGhXL._AC_UY327_FMwebp_QL65_.jpg',
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author, id } = book;
        return <Book img={img} title={title} author={author} key={id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

console.log(BookList);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
