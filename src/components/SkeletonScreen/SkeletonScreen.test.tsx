import React from 'react';

import { mount } from 'enzyme';

import SkeletonScreen from './SkeletonScreen';

describe('<Card />', () => {
  it('Card render', () => {
    expect(mount(<SkeletonScreen />)).toMatchSnapshot();
  });
});
