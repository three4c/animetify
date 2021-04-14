import React, { useState, useEffect } from 'react';
import Classnames from 'classnames';

import styles from './Song.module.scss';

interface SongProps {
  items: {
    animeDescription: string;
    animeName: string;
    artistName: string;
    broadcastOrder: string;
    musicName: string;
  }[];
}

const Song: React.FC<SongProps> = (props) => {
  const MAX_SONG_LENGTH = 3;

  const [isOpen, setOpen] = useState(false);
  const [listMinHeight, setListMinHeight] = useState(0);
  const [listMaxHeight, setListMaxHeight] = useState(0);

  const liRef = Array.from({ length: props.items.length }, () =>
    React.createRef<HTMLLIElement>()
  );

  const classNameForExpand = Classnames('Song__expand', {
    'Song__expand--close': !isOpen && props.items.length > MAX_SONG_LENGTH,
  });

  useEffect(() => {
    let minSum = 0;
    let maxSum = 0;

    liRef.forEach((_, index) => {
      if (liRef[index].current) {
        const liRefCurrent = liRef[index].current;

        if (liRefCurrent) {
          if (index < MAX_SONG_LENGTH) {
            minSum += liRefCurrent.clientHeight;
          }

          maxSum += liRefCurrent.clientHeight;
        }
      }
    });

    setListMinHeight(minSum);
    setListMaxHeight(maxSum);
  }, [liRef]);

  const buttonHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setOpen(!isOpen);
  };

  return (
    <div className={styles.Song}>
      <div
        className={classNameForExpand}
        aria-expanded={isOpen}
        style={{
          maxHeight: `${
            isOpen
              ? `${listMaxHeight}px`
              : listMinHeight
              ? `${
                  listMinHeight -
                  (props.items.length > MAX_SONG_LENGTH ? 24 : 0)
                }px`
              : 'auto'
          }`,
        }}
      >
        <ol className={styles.Song__list}>
          {props.items.map((item, index) => {
            const classNamesForDescription = Classnames(
              'Song__badgeDescription',
              {
                [`Song__badgeDescription--${item.animeDescription}`]: item.animeDescription,
              }
            );

            const classNamesForBroadcastOrder = Classnames(
              'Song__badgeBroadcastOrder',
              {
                'Song__badgeBroadcastOrder--spot':
                  item.broadcastOrder.length > 2,
              }
            );

            return (
              <li key={index} className={styles.Song__item} ref={liRef[index]}>
                <div className={styles.Song__badge}>
                  <span className={classNamesForDescription}>
                    {item.animeDescription}
                  </span>
                  {item.broadcastOrder && (
                    <span className={classNamesForBroadcastOrder}>
                      {item.broadcastOrder}
                    </span>
                  )}
                </div>
                <h3 className={styles.Song__title}>{item.musicName}</h3>
                <p className={styles.Song__artist}>{item.artistName}</p>
              </li>
            );
          })}
        </ol>
      </div>
      {props.items.length > MAX_SONG_LENGTH && (
        <button
          className={`${styles.Song__button} util-focus`}
          onClick={buttonHandler}
          aria-label="もっと見るボタン"
        >
          {isOpen ? '閉じる' : 'もっと見る'}
        </button>
      )}
    </div>
  );
};

export default React.memo(Song);
