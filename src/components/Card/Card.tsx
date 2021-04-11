import React from 'react';

import './Card.scss';

interface CardProps {
  /** タイトル */
  title: string;
  /** 放送日 */
  broadcastStartDate: string;
}

const Card: React.FC<CardProps> = (props) => {
  console.log('a');

  return (
    <div className="Card util-focus" tabIndex={0}>
      <time className="Card__time" dateTime={props.broadcastStartDate}>
        {props.broadcastStartDate.replace(/-/g, '.')}
      </time>
      <h2 className="Card__title">{props.title}</h2>
      {props.children}
    </div>
  );
};
export default Card;
