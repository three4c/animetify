import React from 'react';

import Search from '../../components/Search/Search';
import Tab from '../../components/Tab/Tab';

import styles from './Header.module.scss';

const Header = () => {
  const tab = [
    {
      name: 'アニメタイトル',
    },
    {
      name: 'アニメソング',
    },
    {
      name: 'アニメ放送シーズン',
    },
  ];
  return (
    <header className={styles.Header}>
      <Tab tab={tab} />
      <Search />
    </header>
  );
};

export default Header;
