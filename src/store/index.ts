import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

export enum SearchActionType {
  SET_SEARCH_TEXT_ACTION = 'SET_SEARCH_TEXT_ACTION',
  SET_SUGGEST_TEXT_ACTION = 'SET_SUGGEST_TEXT_ACTION',
}

export interface GlobalState {
  searchText: string;
  searchYear: string;
  searchSeason: string;
  searchFlag: boolean;
  suggestText: string;
}

export interface SearchAction extends GlobalState {
  type: SearchActionType;
}

export const setSearchText = (searchText: GlobalState['searchText']) => {
  return {
    type: SearchActionType.SET_SEARCH_TEXT_ACTION,
    searchText,
  };
};

export const setSuggestText = (suggestText: GlobalState['suggestText']) => {
  return {
    type: SearchActionType.SET_SUGGEST_TEXT_ACTION,
    suggestText,
  };
};

export const initialState: GlobalState = {
  searchText: '',
  searchYear: '',
  searchSeason: '',
  searchFlag: false,
  suggestText: '',
};

export const searchReducer = (
  state = initialState,
  action: SearchAction
): GlobalState => {
  switch (action.type) {
    case SearchActionType.SET_SEARCH_TEXT_ACTION:
      /** XXXX Sの正規表現 */
      if (action.searchText.match(/[0-9]{4}\s+[亜-熙-秋]{1}/)) {
        /** 空白で分割 */
        const splitText = action.searchText.split(/\s+/);
        return {
          ...state,
          searchText: '',
          searchYear: splitText[0],
          searchSeason: splitText[1],
          suggestText: '',
          searchFlag: true,
        };
      } else {
        return {
          ...state,
          searchText: action.searchText,
          suggestText: '',
          searchYear: '',
          searchSeason: '',
          searchFlag: true,
        };
      }
    case SearchActionType.SET_SUGGEST_TEXT_ACTION:
      return {
        ...state,
        searchText: '',
        suggestText: action.suggestText,
        searchFlag: false,
      };
    default:
      return state;
  }
};

export const store = createStore(searchReducer, applyMiddleware(logger));
