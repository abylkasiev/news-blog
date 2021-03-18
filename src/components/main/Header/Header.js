import React, { Component } from 'react';
import './Header.css'
import {NavLink} from 'react-router-dom';
import background from '../../../container/img/header-bg.png'
import logo from '../../../container/img/logo(2).png'

class Header extends Component {
    render() {
        return (
        <div className="top">
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
            <div className="header-block">
                <div className="header-content">
                    <div className="header-info">
                        <h1 className="top-title">International news agency</h1>
                        <p className="top-slogan">Be aware of all events</p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Header;