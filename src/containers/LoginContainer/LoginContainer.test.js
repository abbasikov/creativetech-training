import React from 'react';
import LoginPage from './LoginContainer';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);
const initalState = {};
const store = mockStore(initalState);

it('LoginContainer - defined', () => {
  const comp = shallow(<LoginPage store={store} />);
  const instance = comp.instance();
  expect(instance).toBeDefined();
});
