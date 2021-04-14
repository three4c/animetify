import React from 'react';

import Search from '../../components/Search/Search';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <Search />
    </header>
  );
};

export default Header;
