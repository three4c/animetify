import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';

import {
  SEARCH_ANISON_PROGRAM_TITLE,
  SEARCH_ANISON_PROGRAM_SEASON,
  SEARCH_ANISON_PROGRAM_SONG,
  SEARCH_ANISON_PROGRAM_ALL,
} from '../../graphql/graphql';
import { SongsQuery } from '../../types';
import { GlobalState, setSearchText } from '../../store';
import { convertAnisonProgram, convertLangSeason } from '../../lib/convert';

import SkeletonScreen from '../../components/SkeletonScreen/SkeletonScreen';
import List, { ListProps } from '../../components/List/List';
import Suggest from '../../components/Suggest/Suggest';

const Top: React.FC = () => {
  const store = useSelector<GlobalState, GlobalState>((state) => state);
  const dispatch = useDispatch();

  const today = new Date();
  const year = String(today.getFullYear());
  const month = today.getMonth() + 1;
  const season = convertLangSeason(month);

  const seasons: { [key: string]: string } = {
    春: 'spring',
    夏: 'summer',
    秋: 'autumn',
    冬: 'winter',
  };

  const anisonProgramTitles = useQuery<SongsQuery>(
    SEARCH_ANISON_PROGRAM_TITLE,
    {
      variables: { title: store.searchText },
      context: { clientName: 'anisonProgram' },
    }
  );

  const anisonProgramSeasons = useQuery<SongsQuery>(
    SEARCH_ANISON_PROGRAM_SEASON,
    {
      variables: {
        year: store.searchYear,
        season: seasons[store.searchSeason],
      },
      context: { clientName: 'anisonProgram' },
    }
  );

  // const anisonProgramSongs = useQuery<SongsQuery>(
  //   SEARCH_ANISON_PROGRAM_SONG,
  //   {
  //     variables: {
  //       song: store.searchText,
  //     }
  //   }
  // )

  const anisonProgramAll = useQuery<SongsQuery>(SEARCH_ANISON_PROGRAM_ALL, {
    variables: {
      all: true,
    },
    context: { clientName: 'anisonProgram' },
  });

  const LOADING = anisonProgramTitles.loading || anisonProgramSeasons.loading;
  const ERROR = anisonProgramTitles.error || anisonProgramSeasons.error;

  useEffect(() => {
    dispatch(setSearchText(`${year} ${season}`));
  }, [dispatch, year, season]);

  return (
    <React.Fragment>
      {LOADING ? (
        <SkeletonScreen />
      ) : ERROR ? (
        <div>{ERROR.message}</div>
      ) : (
        anisonProgramTitles.data &&
        anisonProgramSeasons.data &&
        (store.searchFlag ? (
          <List
            works={convertAnisonProgram(
              store.searchText
                ? anisonProgramTitles.data.anisonProgramList
                : anisonProgramSeasons.data.anisonProgramList
            )}
            title={store.searchText}
            year={store.searchYear}
            season={store.searchSeason as ListProps['season']}
          />
        ) : (
          anisonProgramAll.data && (
            <Suggest
              value={store.suggestText}
              works={convertAnisonProgram(
                anisonProgramAll.data.anisonProgramList
              )}
            />
          )
        ))
      )}
    </React.Fragment>
  );
};

export default Top;
