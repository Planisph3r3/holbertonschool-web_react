import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList component Test', () => {
  let CourseListWrapper;

  beforeEach(() => {
    CourseListWrapper = shallow(<CourseList listCourses={[]} />);
  });

  it('Renders without issues', () => {
    expect(CourseListWrapper.exists()).toBe(true);
  });

  it('Renders with 3 CourseListRow', () => {
    expect(CourseListWrapper.find(CourseListRow).length).toBe(3);
  });

  it(
    'Renders with the text "No course available yet"' +
      'when a empty list is given',
    () => {
      const noCourseRow = CourseListWrapper.find(CourseListRow).at(2).dive();
      expect(noCourseRow.find('td').length).toBe(2);
      expect(noCourseRow.find('td').at(0).text()).toBe(
        'No course available yet'
      );
    }
  );

  it('Renders when a list of courses is given', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find(CourseListRow).length).toBe(5);
  });
});
