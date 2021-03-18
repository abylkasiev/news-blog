import React, { Component } from 'react';
import facebook from '../../../container/img/facebook.png'
import google from '../../../container/img/google-plus.png'
import telegram from '../../../container/img/telegram.png'
import twitter from '../../../container/img/twitter.png'
import vk from '../../../container/img/vk.png'
import instagram from '../../../container/img/instagram.png'
import './MyFooter.css'
import logo from '../../../container/img/logo(2).png'
import { NavLink } from 'react-router-dom';


class MyFooter extends Component {
    render() {
        return (
            <div>
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

export default MyFooter;