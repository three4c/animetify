import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from '../../store';

import { shallow } from 'enzyme';

import Search from './Search';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const useSelectorMock = useSelector as jest.Mock;
const useDispatchMcok = useDispatch as jest.Mock;

const mockState: GlobalState = {
  searchText: '電波女と青春男',
  searchYear: '',
  searchSeason: '',
  searchFlag: false,
  suggestText: '',
};

describe('<Search />', () => {
  it('SnapShot - searhFlag:false', () => {
    useSelectorMock.mockImplementation((callback: any) => callback(mockState));
    useDispatchMcok.mockReturnValue(jest.fn());
    expect(shallow(<Search />)).toMatchSnapshot();
  });

  it('SnapShot(searchText) - searhFlag:true', () => {
    mockState.searchFlag = true;
    useSelectorMock.mockImplementation((callback: any) => callback(mockState));
    useDispatchMcok.mockReturnValue(jest.fn());
    expect(shallow(<Search />)).toMatchSnapshot();
  });

  it('SnapShot(yeaer && season) - searhFlag:true', () => {
    mockState.searchFlag = true;
    mockState.searchText = '';
    mockState.searchYear = '2011';
    mockState.searchSeason = '春';
    useSelectorMock.mockImplementation((callback: any) => callback(mockState));
    useDispatchMcok.mockReturnValue(jest.fn());
    expect(shallow(<Search />)).toMatchSnapshot();
  });
});
