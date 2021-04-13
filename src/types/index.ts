export interface AnisonProgramList {
  animeDescription: string;
  animeName: string;
  artistName: string;
  broadcastOrder: string;
  musicName: string;
  broadcastStartDate: string;
}

export interface SongsQuery {
  anisonProgramList: AnisonProgramList[];
}
