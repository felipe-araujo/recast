import React, { Component } from 'react';

export default () => {
  return (
    <div className="mdl-layout__drawer">
      <span className="mdl-layout-title">Optons</span>
      <nav className="mdl-navigation">
        <a className="mdl-navigation__link" href="">Playlists</a>
        <a className="mdl-navigation__link" href="">Tags</a>
        <a className="mdl-navigation__link" href="">Friends</a>
        <a className="mdl-navigation__link" href="">Export Data</a>
      </nav>
    </div>
  );
}
