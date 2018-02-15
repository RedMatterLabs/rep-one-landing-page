import React from 'react';
import { shallow } from 'enzyme';
import Landing from './';

it('Test example', () => {
  const wrapper = shallow(<Landing />);
  expect(wrapper.is('section')).toBeTruthy();
});
