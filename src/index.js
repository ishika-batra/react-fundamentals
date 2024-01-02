import React from 'react';
import ReactDOM from 'react-dom/client';

// function Greetings() {
//   return <h2>My First Component</h2>;
// }

// function Greetings() {
//   return React.createElement('h2', {}, 'Hello World!');
// }

function Greetings() {
  return (
    <>
      <div>
        <h2>Hello World!</h2>
      </div>
      <ul className="list">
        <li>pink</li>
      </ul>
      <img
        src="https://cdn11.bigcommerce.com/s-3uewkq06zr/images/stencil/400x400/products/167/545/fluorescent_pink__88286.1492541116.png?c=2"
        alt=""
      />
    </>
  );
}

// function Greetings() {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h2', {}, 'Hello world!')
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greetings />);
