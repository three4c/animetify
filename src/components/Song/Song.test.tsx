import React from 'react';

import { shallow, mount } from 'enzyme';

import Song from './Song';
import { act } from 'react-dom/test-utils';

describe('<Song />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

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

  const expandItems = [
    {
      animeName: 'プラスティック・メモリーズ',
      animeClassification: 'TV',
      musicName: 'Ring of Fortune',
      artistName: '佐々木恵梨',
      animeDescription: 'OP',
      broadcastOrder: '',
      broadcastStartDate: '2015-04-05',
    },
    {
      animeName: 'プラスティック・メモリーズ',
      animeClassification: 'TV',
      musicName: 'again & again',
      artistName: 'メロディー・チューバック',
      animeDescription: 'ED',
      broadcastOrder: '第1話のみ放映',
      broadcastStartDate: '2015-04-05',
    },
    {
      animeName: 'プラスティック・メモリーズ',
      animeClassification: 'TV',
      musicName: '朝焼けのスターマイン',
      artistName: '今井麻美',
      animeDescription: 'ED',
      broadcastOrder: '1',
      broadcastStartDate: '2015-04-05',
    },
    {
      animeName: 'プラスティック・メモリーズ',
      animeClassification: 'TV',
      musicName: 'Ring of Fortune',
      artistName: '佐々木恵梨',
      animeDescription: 'ED',
      broadcastOrder: 'スポット放映',
      broadcastStartDate: '2015-04-05',
    },
  ];

  it('SnapShot（works）', () => {
    expect(shallow(<Song items={items} />)).toMatchSnapshot();
  });

  it('SnapShot（works） - expand（isOpen: false）', () => {
    expect(shallow(<Song items={expandItems} />)).toMatchSnapshot();
  });

  it('SnapShot（works） - expand（isOpen: true）', () => {
    const wrapper = mount(<Song items={expandItems} />);
    wrapper.find('.Song__button').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  it('useEffect Test', () => {
    const isOpen = jest.fn();
    const listMinHeight = jest.fn();
    const listMaxHeight = jest.fn();
    const useRefMock = {
      current: null,
    };

    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(() => [false, isOpen])
      .mockImplementationOnce(() => [0, listMinHeight])
      .mockImplementationOnce(() => [0, listMaxHeight]);
    jest.spyOn(React, 'useRef').mockReturnValueOnce(useRefMock);

    act(() => {
      mount(<Song items={items} />);
    });

    expect(isOpen).toHaveBeenCalledTimes(0);
    expect(listMinHeight).toHaveBeenCalledTimes(1);
    expect(listMaxHeight).toHaveBeenCalledTimes(1);
  });
});
