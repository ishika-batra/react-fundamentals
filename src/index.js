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
      <EventExamples />
      {books.map((book) => {
        // return <Book potato={book} key={book.id} />;
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: '1rem 0' }}
        />
        <button type="submit">Submit</button>
        <div>
          <button onClick={() => console.log('click me')} type="button">
            Click me
          </button>
        </div>
      </form>
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
