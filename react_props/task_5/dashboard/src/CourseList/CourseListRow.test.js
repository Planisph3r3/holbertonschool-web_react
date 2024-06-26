import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('Test para el componente CourseListRow', () => {
  const courseName = 'Course name';
  const cred = 'Creditos';

  it('When is header is true, renders one cell with colspan = 2 when textSecondCell does not exist', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell={courseName} />
    );
    expect(wrapper.find('th').length).toBe(1);
    expect(wrapper.find('th').prop('colSpan')).toBe(2);
    expect(wrapper.find('th').text()).toBe(courseName);
  });

  it('When is header is true, renders two cells when textSecondCell is present', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell={courseName}
        textSecondCell={cred}
      />
    );
    expect(wrapper.find('th').length).toBe(2);
    expect(wrapper.find('th').at(0).text()).toBe(courseName);
    expect(wrapper.find('th').at(1).text()).toBe(cred);
  });

  it('When is header is false, renders correctly two td elements within a tr element', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell={courseName}
        textSecondCell={cred}
      />
    );
    expect(wrapper.find('td').length).toBe(2);
    expect(wrapper.find('td').at(0).text()).toBe(courseName);
    expect(wrapper.find('td').at(1).text()).toBe(cred);
  });
});
