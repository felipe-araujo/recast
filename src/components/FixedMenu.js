import React, { Component } from 'react';

export default () => {
    return (
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Re!cast</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <a className="mdl-navigation__link" href="">Login</a>
              <a className="mdl-navigation__link" href="">Create Account</a>
            </nav>
          </div>
        </header>
    );
}
