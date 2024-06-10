import React from 'react';
import { shallow } from 'enzyme';
import './Footer'
import Footer from './Footer';

describe('Footer Component', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(<Footer />);
    });
  
    it('Check Rendering', () => {
      expect(wrapper.exists()).toBe(true);
    });
  
    it('Renders and checks if text is correct on the paragraph tag: "Copyright"', () => {
        expect(wrapper.find('p').text()).toMatch('Copyright');
    });
  });