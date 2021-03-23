import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import fakeLocations from './testLocations'
import { Provider } from 'react-redux';
import store from '../storeProvider';

// todo: fix, don't know how to do this without using enzyme to shallow render
it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
});
