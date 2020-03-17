import React from 'react';
import HomeContainer from './HomeContainer';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);
const initalState = {};
const store = mockStore(initalState);

it('HomeContainer - defined', () => {
  const comp = shallow(<HomeContainer store={store} />);
  const instance = comp.instance();
  expect(instance).toBeDefined();
});
