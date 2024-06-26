import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer Test', () => {
  let footerWrapper;

  beforeEach(() => {
    footerWrapper = shallow(<Footer />);
  });

  it('Renders without issues', () => {
    expect(footerWrapper.exists()).toBe(true);
  });

  it('Renders the text Copyright', () => {
    expect(footerWrapper.text().includes('Copyright')).toBe(true);
  });
});
