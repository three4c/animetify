import React from 'react';

import styles from './Section.module.scss';

const Section: React.FC = (props) => (
  <section className={styles.Section}>{props.children}</section>
);

export default Section;
