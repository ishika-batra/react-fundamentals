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
    <div>
      <h2>Hello World!</h2>
    </div>
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
