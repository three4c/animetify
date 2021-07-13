import React, { useState } from 'react';

import styles from './Tab.module.scss';

interface TabProps {
  tab: {
    name: string;
  }[];
}

const Tab: React.FC<TabProps> = (props) => {
  const [selectTab, setSelectTab] = useState('panel1');

  const onClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSelectTab(e.currentTarget.getAttribute('aria-controls'));
  };

  return (
    <div className={styles.Tab}>
      <ul className={styles.Tab__list} role="tablist">
        {props.tab.map((item, index) => (
          <li className={styles.Tab__listItem} role="tab" key={index}>
            <button
              className={`${styles.Tab__listItemButton} util-bold`}
              role="tab"
              aria-controls={`panel${index + 1}`}
              aria-selected={selectTab === `panel${index + 1}`}
              onClick={onClickHandler}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tab;
