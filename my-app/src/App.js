import React, { Component } from 'react';
import {BrowserRouter as Router,
        Route
} from 'react-router-dom';
import './App.css';

//components
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import Nav from './components/nav';

import Post1 from './components/post1';
import Post2 from './components/post2';
import Post3 from './components/post3';



class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
          <Header />
            <div id = "main" >
                <Route exact path='/' component={Main}/>
                <Route exact path='/Post1' component={Post1}/>
                <Route exact path='/Post2' component={Post2}/>
                <Route exact path='/Post3' component={Post3}/>

                <Nav />
            </div>
          <Footer />
          </div>
        </Router>
    );
  }
}

export default App;
