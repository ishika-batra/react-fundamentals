import React from 'react';
import ReactDOM from 'react-dom/client';
// JSX SYNTAX
// function Greetings() {
//   return (
//     <>
//       <div>
//         <h2>Hello World!</h2>
//       </div>
//       <ul className="list">
//         <li>pink</li>
//       </ul>
//       <img
//         src="https://cdn11.bigcommerce.com/s-3uewkq06zr/images/stencil/400x400/products/167/545/fluorescent_pink__88286.1492541116.png?c=2"
//         alt=""
//       />
//     </>
//   );
// }

// NESTING COMPONENTS

function Greetings() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>Ishika Batra</h2>;
const Message = () => (
  <>
    <p>This is my Message</p>
    <p>yo guys</p>
  </>
);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greetings />);
