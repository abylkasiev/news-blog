import React, { Component } from 'react';
import './Header.css'
import background from '../../../container/img/header-bg.png'

class Header extends Component {
    render() {
        return (
            <div className="top">
                <img className="header-bg" src={background}/>
                <div className="header-content">
                    <div className="header-info">
                        <h1 className="top-title">International news agency</h1>
                        <p className="top-slogan">Be aware of all events</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;