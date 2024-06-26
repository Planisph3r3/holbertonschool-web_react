import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component Test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} />
    );
  });

  it('Renders without issues.', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Renders with 0 NotificationItem components.', () => {
    expect(wrapper.find(NotificationItem).length).toBe(0);
  });

  it(
    'Renders with the text "No new notifications for now"' +
      ' when displaDrawer=true and listNotifications=[]',
    () => {
      expect(wrapper.find('.Notifications p').at(0).text()).toBe(
        'No new notifications for now'
      );
    }
  );
  
  it(
    'Renders with the text "Here is the list of notifications" when displayDrawer=true' +
      ' and listNotifications have a list with data.',
    () => {
      const notification = {
        id: 2,
        type: 'urgent',
        value: 'New resume available',
      };
      wrapper = shallow(
        <Notifications
          displayDrawer={true}
          listNotifications={[notification]}
        />
      );
      expect(wrapper.find('.Notifications p').at(0).text()).toBe(
        'Here is the list of notifications'
      );
    }
  );

  it('Renders the correct number of notifications', () => {
    const notification = {
      id: 2,
      type: 'urgent',
      value: 'New resume available',
    };
    wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={[notification]} />
    );
    expect(wrapper.find(NotificationItem).length).toBe(1);
  });

  it('Renders the text "Your notifications" when displayDrawer=false', () => {
    wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('p').text()).toBe('Your notifications');
  });
});
