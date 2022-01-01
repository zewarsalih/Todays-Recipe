import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Contact</h2>
                        <Link to='contact'>support@hupfront.com</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Media</h2>
                        <Link to={{ pathname: 'https://hupfront.com' }} target='_blank'>HupFront.com</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <img src="/react-recipe-finder/hamburger.svg" className='navbar-icon' />
                            Today`s Recipe
                        </Link>
                    </div>
                    <small className='website-rights'>HupFront © {new Date().getFullYear()} All rights reserved.</small>
                </div>
            </section>
        </div>
    );
}

export default Footer;
