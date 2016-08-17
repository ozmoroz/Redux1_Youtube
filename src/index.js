import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyCGNVl4M5HY8C7sb8zDSUOz9SA4oN2hoNQ';

// Create a new component to produce some html
const App = () => {
  return <div>Hi!</div>;
}

// Take those components and put them on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
