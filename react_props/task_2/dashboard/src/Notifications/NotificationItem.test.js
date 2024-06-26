import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from '../Notifications/NotificationItem';

describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem type="default" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct HTML with type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.prop('data-notification-type')).toEqual('default');
    expect(wrapper.text()).toEqual('test');
  });

  it('Renders the correct html with a dummy html prop', () => {
    const html = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem type="default" html={html} />);
    expect(wrapper.html()).toContain('<li data-notification-type="default"><u>test</u></li>');
  });
});
