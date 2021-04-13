import { gql } from '@apollo/client';

/** $を使用する場合は、冒頭はquery {...}で初める */
export const SEARCH_ANISON_PROGRAM_SEASON = gql`
  query getAnisonProgramList($year: String, $season: String) {
    anisonProgramList(year: $year, season: $season) {
      animeName
      animeClassification
      musicName
      artistName
      animeDescription
      broadcastOrder
      broadcastStartDate
    }
  }
`;

export const SEARCH_ANISON_PROGRAM_TITLE = gql`
  query getAnisonProgramList($title: String) {
    anisonProgramList(title: $title) {
      animeName
      animeClassification
      musicName
      artistName
      animeDescription
      broadcastOrder
      broadcastStartDate
    }
  }
`;

export const SEARCH_ANISON_PROGRAM_SONG = gql`
  query getAnisonProgramList($song: String) {
    anisonProgramList(song: $song) {
      animeName
      animeClassification
      musicName
      artistName
      animeDescription
      broadcastOrder
      broadcastStartDate
    }
  }
`;

export const SEARCH_ANISON_PROGRAM_ALL = gql`
  query getAnisonProgramList($all: Boolean) {
    anisonProgramList(all: $all) {
      animeName
      animeClassification
      musicName
      artistName
      animeDescription
      broadcastOrder
    }
  }
`;
