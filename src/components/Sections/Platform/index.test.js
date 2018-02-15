import React from 'react';
import { shallow } from 'enzyme';
import Platform from './';

it('Test example', () => {
  const wrapper = shallow(<Platform />);
  expect(wrapper.is('section')).toBeTruthy();
});
