import React from 'react';
import { shallow } from 'enzyme';
import Pricing from './';

it('Test example', () => {
  const wrapper = shallow(<Pricing />);
  expect(wrapper.is('section')).toBeTruthy();
});
