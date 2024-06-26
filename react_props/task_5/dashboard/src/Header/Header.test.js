import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component Test', () => {
  let headerWrapper;

  beforeEach(() => {
    headerWrapper = shallow(<Header />);
  });

  it('Renders without issues', () => {
    expect(headerWrapper.exists()).toBe(true);
  });

  it('Renders with an img element', () => {
    expect(headerWrapper.find('img').length).toBe(1);
  });

  it('RRenders with an h1 element', () => {
    expect(headerWrapper.find('h1').length).toBe(1);
  });
});
