import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';

it('App renders without crashing', () => {
  const mockStore = configureStore();
  const initalState = {};
  const store = mockStore(initalState);
  const history = createMemoryHistory({ initialEntries: ['/'] });

  shallow(<App store={store} history={history} />);
});
