import React, { Fragment } from 'react';

import Layout from './Layout/Layout';

import './App.css';

const App = () => {
  return (
    <Fragment className='App'>
      <Layout />
      <div className="circle1"></div>
      <div className='circle2'></div>
    </Fragment>
  );
};

export default App;
