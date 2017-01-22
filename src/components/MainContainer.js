import React, { Component } from 'react';
import FixedMenu from './FixedMenu';
import SideMenu from './SideMenu';
import Podcasts from './podcasts/Podcasts';


export default () => {
  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <FixedMenu/>
      <SideMenu/>
      <main className="mdl-layout__content">
        <Podcasts/>
      </main>
    </div>
  );
}
