import React, { Component } from 'react';
import FixedMenu from './FixedMenu';
import SideMenu from './SideMenu';
import Podcasts from './podcasts/Podcasts';
import Player from './Player';

export default () => {
  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <FixedMenu/>
      <SideMenu/>
      <main className="mdl-layout__content">
        <Podcasts/>
      </main>
      <Player/>
    </div>
  );
}
