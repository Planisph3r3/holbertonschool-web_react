import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it('Check rendering', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Renders and checks NotificationItem Components', () => {
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('Renders and checks if text is alright "Here is the list of notifications"', () => {
    expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
  });

  it('First NotificationItem element renders correct html', () => {
    const firstNotification = wrapper.find(NotificationItem).at(0);
    expect(firstNotification.html()).toContain('<li data-notification-type=\"default\">New course available</li>');
  });
});
