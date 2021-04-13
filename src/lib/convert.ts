import { AnisonProgramList } from '../types';

/** 季節の日本語と英語の変換 */
export const convertLangSeason = (month: number) => {
  switch (true) {
    case 1 <= month && month <= 3:
      return '冬';
    case 4 <= month && month <= 6:
      return '春';
    case 7 <= month && month <= 9:
      return '夏';
    case 10 <= month && month <= 12:
      return '秋';
    default:
      return '春';
  }
};

/** アニメとアニソンを結びつけた配列を作る */
export const convertAnisonProgram = (convertArray: AnisonProgramList[]) => {
  const categories = convertArray
    .filter((item) => item.animeName)
    .reduce(
      (acc, next) => {
        if (!acc[next.animeName]) {
          acc[next.animeName] = [];
        }

        acc[next.animeName] = [...acc[next.animeName], next];
        return acc;
      },
      {} as {
        [key: string]: AnisonProgramList[];
      }
    );

  const convertCategories = Object.entries(categories).map(
    ([categoryName, prop]) => {
      return {
        animeName: categoryName,
        broadcastStartDate: prop[0].broadcastStartDate,
        animeSong: prop,
      };
    }
  );

  return convertCategories;
};
