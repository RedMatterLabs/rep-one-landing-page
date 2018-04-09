import React from 'react';
import { shallow } from 'enzyme';
import Insights from './';

it('Test example', () => {
  const wrapper = shallow(<Insights />);
  expect(wrapper.is('div')).toBeTruthy();
});
