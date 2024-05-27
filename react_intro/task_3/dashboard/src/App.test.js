import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Check Rendering', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Renders an element with the class App-header', () => {
    expect(wrapper.find('.App-header').length).toBe(1);
  });

  it('Renders an element with the class App-body', () => {
    expect(wrapper.find('.App-body').length).toBe(1);
  });

  it('Renders an element with the class App-footer', () => {
    expect(wrapper.find('.App-footer').length).toBe(1);
  });
});
