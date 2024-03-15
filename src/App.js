import React from 'react';
import { Article, Brand, Cta, Feature,Navbar } from './component';
import { Blog, Footer, Header, Possibility, ChatGPT3} from './container';
import './App.css';


const App = () => {
  return (
    <div className='app'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <ChatGPT3 />
      <Feature />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
      <Article />
    </div>
  )
}

export default App
