import React from 'react';
import { shallow } from 'enzyme';
import CTA from './';

it('Test example', () => {
  const wrapper = shallow(<CTA />);
  expect(wrapper.is('section')).toBeTruthy();
});
