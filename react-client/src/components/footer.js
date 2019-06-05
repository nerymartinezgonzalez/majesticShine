import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faWifi, faThumbsDown, faMap } from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
    render() {
        return (
            <div>
               

                <footer className="footer-distributed">
                    <div className="footer-right">
                        <a href="#"><FontAwesomeIcon icon={ faWifi } /></a>
                        <a href="#"><FontAwesomeIcon icon={ faThumbsUp } /></a>
                        <a href="#"><FontAwesomeIcon icon={ faThumbsDown } /></a>
                        <a href="#"><FontAwesomeIcon icon={ faMap} /></a>
                    </div>
                    <div className="footer-left">
                        <p className="footer-links">
                            <a className="link-1" href="#">Home</a>
                            <a href="#">Blog</a>
                            <a href="#">Pricing</a>
                            <a href="#">About</a>
                            <a href="#">Faq</a>
                            <a href="#">Contact</a>
                        </p>
                        <p>Company Name &copy; 2015</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;