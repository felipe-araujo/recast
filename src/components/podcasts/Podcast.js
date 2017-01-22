import React, { Component } from 'react';

export default ({podcast: {title, url, image} }) => {

  //const {podcast: {title, url, image} } = this.props;
  return (
    <div className="demo-card-wide mdl-card mdl-shadow--4dp">
      <div className="mdl-card__title">
        <h2 className="mdl-card__title-text">{title}</h2>
      </div>
      <div className="mdl-card__supporting-text">
        {title}
      </div>
      <div className="mdl-card__actions mdl-card--border">
        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
          Play
        </a>
      </div>
      <div className="mdl-card__menu">
        <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
          <i className="material-icons">share</i>
        </button>
      </div>
    </div>
  );
}
