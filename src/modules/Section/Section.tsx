import React from 'react';

import styles from './Section.module.scss';

const Section: React.FC = (props) => {
  return (
    <section className={styles.Section}>
      <div className={styles.Section__inner}>{props.children}</div>
    </section>
  );
};

export default Section;
