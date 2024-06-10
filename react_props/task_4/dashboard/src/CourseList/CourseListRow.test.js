import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe('Test for CourseListRow', () => {
    
    it('When is header is true, renders one cell with colspan = 2 when textSecondCell does not exist', () => {
      const wrapper = shallow(<CourseListRow isHeader textFirstCell="Header" />);
      expect(wrapper.find('th')).toHaveLength(1);
      expect(wrapper.find('th').prop('colSpan')).toBe(2);
    })

    it('When is header is true, renders two cells when textSecondCell is present', () => {
        const wrapper = shallow(<CourseListRow isHeader textFirstCell="Header" textSecondCell="Second Header" />);
        expect(wrapper.find('th')).toHaveLength(2);
      });
    
    it('When is header is false, renders correctly two td elements within a tr element', () => {
      const wrapper = shallow(<CourseListRow textFirstCell="Test 1" textSecondCell="Test 2" />);
      expect(wrapper.find('tr')).toHaveLength(1);
      expect(wrapper.find('td')).toHaveLength(2);
    });
})