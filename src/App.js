import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ErrorBoundary from './ErrorBoundary';
import { store } from './store/configureStore';


import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Provider store={store}>
          <Routes />
        </Provider>
      </ErrorBoundary>
    );
  }
}

export default App;
