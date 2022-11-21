import React from 'react';
import './App.css';
import { Nav, Bio, Gallery } from './components';


function App() {



  return (
    // <> is a react fragment - allows you to return multiple elements
    <>
      <Nav />
      <div className="conatiner">
        <Bio />
        <Gallery />
      </div>
    </>
  );
}

export default App;
