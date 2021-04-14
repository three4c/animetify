import React from 'react';
import Masonry from 'react-masonry-css';
import { AnisonProgramList } from '../../types';

import Card from '../Card/Card';
import Song from '../Song/Song';

import styles from './List.module.scss';

export interface ListProps {
  /** アニソン API */
  works: {
    animeName: string;
    animeSong: AnisonProgramList[];
    broadcastStartDate: string;
  }[];
  /** 年 */
  year?: string;
  /** 季節 */
  season?: '春' | '夏' | '秋' | '冬';
  /** タイトル */
  title?: string;
}

const List: React.FC<ListProps> = (props) => {
  const breakpointColumnsObj = {
    default: 5,
    1456: 4,
    1160: 3,
  };

  return (
    <div className={styles.List}>
      <div className={styles.List__header}>
        <h1 className={styles.List__title}>
          {props.works.length === 0
            ? '見つかりませんでした :('
            : props.year && props.season
            ? `${props.year}年の${props.season}アニメ`
            : props.title}
        </h1>
        {props.works.length !== 0 && (
          <span
            className={styles.List__works}
          >{`${props.works.length}作品`}</span>
        )}
      </div>
      {props.works.length !== 0 && (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles.List__masonry}
          columnClassName={styles.List__column}
        >
          {props.works.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.animeName}
                broadcastStartDate={item.broadcastStartDate}
              >
                <Song items={item.animeSong} />
              </Card>
            );
          })}
        </Masonry>
      )}
    </div>
  );
};

export default List;
