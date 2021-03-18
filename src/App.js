import React, { Component } from 'react';
import './App.css'
import MyFooter from './components/main/MyFooter/MyFooter';
import Header from './components/main/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="wrapper">
          <Header/>
          <MyFooter/>
        </div>
      </div>
    );
  }
}

export default App;