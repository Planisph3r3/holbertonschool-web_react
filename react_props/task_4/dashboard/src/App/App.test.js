import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Check Rendering of the main component (App)', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Checks that Footer component should render', () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  it('Checks that Footer component should render' , () => {
    expect(wrapper.find(Login).exists()).toBe(true);
  });

  it('Checks that Header component should render', () => {
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('Checks that Notification component should render', () => {
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  describe('when isLoggedIn is true', () => {
    beforeEach(() => {
      wrapper.setProps({ isLoggedIn: true });
    });

    it('Does not include Login component', () => {
      expect(wrapper.find(Login).exists()).toBe(false);
    });

    it('Includes CourseList component', () => {
      expect(wrapper.find(CourseList).exists()).toBe(true);
    });
  });
});
