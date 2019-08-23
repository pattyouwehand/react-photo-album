import React from 'react';
import {Provider} from 'react-redux';
import AlbumsListContainer from './components/AlbumListContainer';
import store from './store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <AlbumsListContainer />
        </div>
      </Provider>
    );
  }
}
