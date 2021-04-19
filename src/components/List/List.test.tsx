import React from 'react';

import { shallow } from 'enzyme';

import List from './List';

describe('<List />', () => {
  const works = [
    {
      animeName: '電波女と青春男',
      broadcastStartDate: '2011-04-15',
      animeSong: [
        {
          animeName: '電波女と青春男',
          animeClassification: 'TV',
          musicName: 'Os-宇宙人',
          artistName: '大亀あすか',
          animeDescription: 'OP',
          broadcastOrder: '',
          broadcastStartDate: '2011-04-15',
        },
        {
          animeName: '電波女と青春男',
          animeClassification: 'TV',
          musicName: 'ルル',
          artistName: 'やくしまるえつこ',
          animeDescription: 'ED',
          broadcastOrder: '',
          broadcastStartDate: '2011-04-15',
        },
      ],
    },
  ];

  it('SnapShot（works）', () => {
    expect(shallow(<List works={works} />)).toMatchSnapshot();
  });

  it('SnapShot（year, season）', () => {
    expect(
      shallow(<List works={works} year="2011" season="春" />)
    ).toMatchSnapshot();
  });

  it('SnapShot（Not Found）', () => {
    expect(shallow(<List works={[]} />)).toMatchSnapshot();
  });
});
