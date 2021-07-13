import React, { Fragment } from 'react';
import './App.css';
import Landing from './components/Layout/Landing';
import Navbar from './components/Layout/Navbar';

const App = () => {
  return (
    <Fragment className='App'>
      <Navbar />
      <Landing />
    </Fragment>
  );
};

export default App;
