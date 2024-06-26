import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from '../Notifications/NotificationItem';

describe('NotificationItem componente', () => {
  it('Renders without issues with the property "default"', () => {
    const wrapper = shallow(<NotificationItem type="default" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct HTML with type and value props.', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.prop('data-notification-type')).toEqual('default');
    expect(wrapper.text()).toEqual('test');
  });

  it('Renders with HTML', () => {
    const tagHtml = { __html: '<p>test</p>' };
    const wrapper = shallow(<NotificationItem type="default" html={tagHtml} />);
    expect(wrapper.html()).toContain('<p>test</p>');
  });
});
