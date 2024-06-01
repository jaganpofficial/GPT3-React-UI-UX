import React from 'react';

import { Header, Footer, Blog, Features, Possibility, Whatgpt3} from './containers';
import { Cta, Brand, Navbar } from './components';
import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header/>
      </div>
      <Brand />
      <Whatgpt3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
