import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Section from './components/Section';
import Data from './components/Data';
import { sharedData } from './shared_data';

function App() {
  return (
    <div className='content'>
      <Header sharedData={sharedData}></Header>
      <Section sharedData={sharedData}></Section>
      <h2 className='sub-title'>Data</h2>
      <Data></Data>
      <Footer></Footer>
    </div>
  );
}

export default App;
