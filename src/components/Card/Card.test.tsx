import React from 'react';

import { mount } from 'enzyme';

import Card from './Card';

describe('<Card />', () => {
  it('Card render', () => {
    expect(
      mount(
        <Card title="電波女と青春男" broadcastStartDate="2011-04-15">
          <div>Card Children</div>
        </Card>
      )
    ).toMatchSnapshot();
  });
});
