import React from 'react';
import { shallow } from 'enzyme';
import Teams from './';

it('Test example', () => {
  const wrapper = shallow(<Teams />);
  expect(wrapper.is('section')).toBeTruthy();
});
