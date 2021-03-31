// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
    module.hot.accept();
}

// Create a React component
const App = () => {
    return <div>Hi there!</div>
};

// Take the React Component and show it to the screen
ReactDOM.render(<App />, document.querySelector('#root'));