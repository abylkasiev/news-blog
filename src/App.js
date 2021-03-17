import React, { Component } from 'react';
import logo from '../src/container/img/logo(2).png'
import facebook from '../src/container/img/facebook.png'
import google from '../src/container/img/google-plus.png'
import telegram from '../src/container/img/telegram.png'
import twitter from '../src/container/img/twitter.png'
import vk from '../src/container/img/vk.png'
import instagram from '../src/container/img/instagram.png'
import {NavLink} from 'react-router-dom';
import './App.css'
import Header from './components/main/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <header className="header">
            <div className="header__logo">
              <img className="logo" src={logo}/>
            </div>
            <div className="header__nav">
              <ul className="nav">
                <li className="nav__item">
                  <NavLink className="nav-link" to="/" exact>Main</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink className="nav-link" to="/" exact>News</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink className="nav-link" to="/" exact>Add</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink className="nav-link" to="/" exact>Contact</NavLink>
                </li>
              </ul>
            </div>
          </header>
        </div>
        <Header/>

        <footer className="footer">
          <div className="foot">
            <div className="footer__menu">
              <h3 className="menu">Menu</h3>
              <ul className="footer-nav">
                  <li className="footer__item">
                    <NavLink className="footer-link" to="/" exact>Main</NavLink>
                  </li>
                  <li className="footer__item">
                    <NavLink className="footer-link" to="/" exact>News</NavLink>
                  </li>
                  <li className="footer__item">
                    <NavLink className="footer-link" to="/" exact>Add</NavLink>
                  </li>
                  <li className="footer__item">
                    <NavLink className="footer-link" to="/" exact>Contact</NavLink>
                  </li>
              </ul>
            </div>
            <div className="footer__social">
              <h3 className="socials">Socials</h3>
              <div className="soc-icons">
                <img className="soc-icon" src={facebook}/>
                <img className="soc-icon" src={twitter}/>
                <img className="soc-icon" src={vk}/>
                <img className="soc-icon" src={google}/>
                <img className="soc-icon" src={telegram}/>
                <img className="soc-icon" src={instagram}/>
              </div>
            </div>
            <div className="footer__logo">
              <div className="foot-logo"><img className="logo" src={logo}/></div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;