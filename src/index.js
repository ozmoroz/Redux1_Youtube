import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component to produce some html
const App = () => {
  return <div>Hi!</div>;
}

// Take those components and put them on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
