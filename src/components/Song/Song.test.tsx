import React from 'react';

import { shallow, mount } from 'enzyme';

import Song from './Song';
import { act } from 'react-dom/test-utils';

describe('<Song />', () => {
  const items = [
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
  ];

  it('SnapShot（works）', () => {
    expect(shallow(<Song items={items} />)).toMatchSnapshot();
  });

  //   it('useEffect Test', () => {
  //     const listMinHeight = jest.fn();
  //     const listMaxHeight = jest.fn();
  //     const useRefMock = {
  //       current: null,
  //     };

  //     jest
  //       .spyOn(React, 'useState')
  //       .mockImplementation(() => [0, listMinHeight])
  //       .mockImplementation(() => [0, listMaxHeight]);
  //     jest.spyOn(React, 'useRef').mockReturnValueOnce(useRefMock);

  //     act(() => {
  //       mount(<Song items={items} />);
  //     });

  //     expect(listMinHeight).toHaveBeenCalledTimes(1);
  //     expect(listMaxHeight).toHaveBeenCalledTimes(1);
  //   });
});
