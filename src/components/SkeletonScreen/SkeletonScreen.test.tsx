import React from 'react';

import { shallow } from 'enzyme';

import SkeletonScreen from './SkeletonScreen';

describe('<SkeletonScreen />', () => {
  it('SnapShot', () => {
    expect(shallow(<SkeletonScreen />)).toMatchSnapshot();
  });
});
