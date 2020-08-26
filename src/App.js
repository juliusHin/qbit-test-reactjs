import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavigationComponent from "./app/components/navigation"
import './App.css';
import HomePage from './app/pages/home/home';
import PostingPage from './app/pages/posting/posting';
import AboutPage from './app/pages/about/about';
import LoginPage from './app/pages/auth/login';

function App() {
  return (
    <div className="App">        
        <Router>
          <NavigationComponent/>

          <Route path="/" exact component={HomePage}/>
          <Route path="/posting" component = {PostingPage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/login" component={LoginPage}/>
        </Router>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
