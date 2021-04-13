import React from 'react';

import styles from './Card.module.scss';

interface CardProps {
  /** タイトル */
  title: string;
  /** 放送日 */
  broadcastStartDate: string;
}

const Card: React.FC<CardProps> = (props) => (
  <div className={`${styles.Card} util-focus`} tabIndex={0}>
    <time className={styles.Card__time} dateTime={props.broadcastStartDate}>
      {props.broadcastStartDate.replace(/-/g, '.')}
    </time>
    <h2 className={styles.Card__title}>{props.title}</h2>
    {props.children}
  </div>
);
export default Card;
