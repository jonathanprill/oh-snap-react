// Think of App.js as the root component, or the wrapper component that houses all of the other components.
// import logo from './logo.svg';
// import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
