import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('App Test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Check Rendering of the main component (App)', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Checks that Notification component should render', () => {
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  it('Checks that Header component should render', () => {
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('Checks that Footer component should render.', () => {
    expect(wrapper.find(Footer).length).toBe(1);
  });

  it('Renders with the component Login when isLoggedIn is false', () => {
    const appWrapper = shallow(<App isLoggedIn={false} />);
    expect(appWrapper.find(Login).length).toBe(1);
  });

  it('Renders with the component CourseList when isLoggedIn is true', () => {
    const appWrapper = shallow(<App isLoggedIn={true} />);
    expect(appWrapper.find(CourseList).length).toBe(1);
  });
});
