import React from 'react';

import styles from './SkeletonScreen.module.scss';

interface SkeletonScreenProps {
  /** 表示数 */
  length?: number;
}

const SkeletonScreen: React.FC<SkeletonScreenProps> = (props) => (
  <div className={styles.SkeletonScreen}>
    <div
      className={`${styles.SkeletonScreen__shimmer} ${styles.SkeletonScreen__title}`}
    />
    <ul className={styles.SkeletonScreen__list}>
      {[...Array(props.length)].map((_, index) => (
        <li className={styles.SkeletonScreen__item} key={index}>
          <div
            className={`${styles.SkeletonScreen__shimmer} ${styles.SkeletonScreen__itemTime}`}
          />
          <div
            className={`${styles.SkeletonScreen__shimmer} ${styles.SkeletonScreen__itemTitle}}`}
          />
          <div
            className={`${styles.SkeletonScreen__shimmer} ${styles.SkeletonScreen__itemTag}`}
          />
          <div
            className={`${styles.SkeletonScreen__shimmer} ${styles.SkeletonScreen__itemText}`}
          />
          <div
            className={`${styles.SkeletonScreen__shimmer} ${styles.SkeletonScreen__itemSubText}`}
          />
          <div
            className={`${styles.SkeletonScreen__shimmer} ${styles.SkeletonScreen__itemTag}`}
          />
          <div
            className={`${styles.SkeletonScreen__shimmer} ${styles.SkeletonScreen__itemText}`}
          />
          <div
            className={`${styles.SkeletonScreen__shimmer} ${styles.SkeletonScreen__itemSubText}`}
          />
        </li>
      ))}
    </ul>
  </div>
);

SkeletonScreen.defaultProps = {
  length: 9,
};

export default SkeletonScreen;
