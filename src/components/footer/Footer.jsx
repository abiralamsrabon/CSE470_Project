import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';


const Footer = () => {
    return (
        <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <Link to="/"><span style={{ color: 'Red' }}>Show</span>House</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to= "/movie"><h1>Movie</h1></Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/tv"><h1>TV Shows</h1></Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/topmovies"><h1>Trending</h1></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
