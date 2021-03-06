import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/recast.css';
import MainContainer from './components/MainContainer';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import PodcastReducer from './reducers/podcasts';
import PlaylistReducer from './reducers/playlist';

class App extends Component {
  render() {

    const reducers = combineReducers({ podcasts: PodcastReducer, playlist: PlaylistReducer});
    const store = createStore(reducers);

    return (
      <Provider store={store}>
        <MainContainer/>
      </Provider>
    );
  }
}

export default App;
