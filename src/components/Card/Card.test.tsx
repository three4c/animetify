import React from 'react';

import { shallow } from 'enzyme';

import Card from './Card';

describe('<Card />', () => {
  it('SnapShot', () => {
    expect(
      shallow(
        <Card title="電波女と青春男" broadcastStartDate="2011-04-15">
          <div>Card Children</div>
        </Card>
      )
    ).toMatchSnapshot();
  });
});
