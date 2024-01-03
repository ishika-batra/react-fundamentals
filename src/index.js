import React from 'react';
import ReactDOM from 'react-dom/client';

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => (
  <img src="https://m.media-amazon.com/images/I/71CvcFBz4pL._AC_UY327_FMwebp_QL65_.jpg" />
);
const Title = () => <h2>Ikigai</h2>;
const Author = () => {
  return <h4> Keira Miki</h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
