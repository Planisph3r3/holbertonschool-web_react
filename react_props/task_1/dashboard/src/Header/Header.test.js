import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header Component', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(<Header />);
    });
  
    it('Check Rendering', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('Check rendering of H1 and img tags', () => {
        expect(wrapper.exists('h1')).toBe(true);
        expect(wrapper.exists('img')).toBe(true);
    });

  });