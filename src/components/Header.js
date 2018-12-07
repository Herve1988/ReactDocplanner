import React, { Component } from 'react';

class Header extends Component {
    
    render() { 
        return (
              <nav className="haut_page">
              <div className="section__interne">
                <h1>
                    <a href="https://www.docplanner.com/about-us">
                        <img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt ="Docplanner Group" />
                    </a>
                </h1>
                <button type="button" className="hamburger">
                    <span className="hamburger-box">
                        <span className="hamburger-interne"></span>
                    </span>
                </button>
                <nav className="barre_nav">
                    <ul className="menu_principal">
                        <li><a href="https://www.docplanner.com/about-us" className="informations">About us</a></li>
                        <li><a href="https://www.docplanner.com/career" >Career</a></li>
                        <li className="dropdown">
                            <a >
                                Department<br />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </nav>



         );
    }
}
 
export default Header;


