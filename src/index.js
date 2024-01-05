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
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          maxime tenetur consequuntur eius cupiditate beatae voluptate magni
          ipsam et animi!
        </p>
        <button>Click Me</button>
      </Book>

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
  const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
