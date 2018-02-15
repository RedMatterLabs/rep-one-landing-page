import React from 'react';
import { shallow } from 'enzyme';
import Manage from './';

it('Test example', () => {
  const wrapper = shallow(<Manage />);
  expect(wrapper.is('section')).toBeTruthy();
});
