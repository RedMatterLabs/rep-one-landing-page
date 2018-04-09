import React from 'react';
import { shallow } from 'enzyme';
import Analytics from './';

it('Test example', () => {
  const wrapper = shallow(<Analytics />);
  expect(wrapper.is('div')).toBeTruthy();
});
