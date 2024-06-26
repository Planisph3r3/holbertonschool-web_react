import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login component Test', () => {
  let loginWrapper;

  beforeEach(() => {
    loginWrapper = shallow(<Login />);
  });

  it('Renders without issues', () => {
    expect(loginWrapper.exists()).toBe(true);
  });

  it('Renders with 2 input elements', () => {
    expect(loginWrapper.find('input').length).toBe(2);
  });

  it('Renders with 2 label elements', () => {
    expect(loginWrapper.find('label').length).toBe(2);
  });
});
