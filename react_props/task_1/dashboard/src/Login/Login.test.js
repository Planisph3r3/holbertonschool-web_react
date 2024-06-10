import React from 'react';
import { shallow } from 'enzyme';
import './Login'
import Login from './Login';

describe('Login/Body Component', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(<Login />);
    });
  
    it('Check Rendering', () => {
      expect(wrapper.exists()).toBe(true);
    });
    
    it('Renders and checks 2 input & label tags', () => {
        expect(wrapper.find('input').length).toBe(2);
        expect(wrapper.find('label').length).toBe(2);
    });
    
  });