import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe('Test for CourseList', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CourseList />);
      });

    it('Check that it renders CourseList component without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    })

    it('Check that it renders the 5 different rows', () => {
      expect(wrapper.find(CourseListRow).length).toBe(5);
    });
})