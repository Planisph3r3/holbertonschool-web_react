import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it('Check rendering', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Renders and checks 3 li existance', () => {
    expect(wrapper.find('li').length).toBe(3);
  });

  it('Renders and checks if text is alright "Here is the list of notifications"', () => {
    expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
  });
});
