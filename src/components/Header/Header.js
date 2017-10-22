import React, { Component } from 'react';
import  { Link } from 'react-router-dom';

import './Header.css';


class Header extends Component {


    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

  render() {

    let menuActive = this.state.isToggleOn ? 'is-active': '';

    return (
    <div className="navbar has-shadow">
        <div className="container">
            <div className="navbar-brand">
                <a className="navbar-item">My Company</a>
            </div>
            <span className={'nav-toggle '+menuActive } onClick={this.handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </span>


            <div className={'navbar-end navbar-menu '+menuActive } >
              
                 <Link to="/" className="navbar-item r-item">Home</Link>
                 <Link to="/faq" className="navbar-item r-item">Faq</Link>
      
                
               
                <div className="navbar-end">
                    <p className="navbar-item"><a className="button is-primary is-outlined">Join Now</a></p>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Header;
