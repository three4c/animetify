import React, { useState } from 'react';
import clsx from 'clsx';

import { useDispatch } from 'react-redux';
import { setSearchText } from '../../store';
import { AnisonProgramList } from '../../types';

import styles from './Suggest.module.scss';

interface SuggestProps {
  /** 入力中の文字列 */
  value: string;
  /** 検索対象のデータ */
  works: {
    animeName: string;
    animeSong: AnisonProgramList[];
  }[];
}

const Suggest: React.FC<SuggestProps> = (props) => {
  const dispath = useDispatch();

  const getSuggestions = (value: string) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : props.works.filter(
          (item) =>
            item.animeName.trim().toLowerCase().slice(0, inputLength) ===
            inputValue
        );
  };

  const suggestions = getSuggestions(props.value);

  /** suggestionsの長さのref配列を作成 */
  const buttonRef = Array.from({ length: suggestions.length }).map(() =>
    React.createRef<HTMLButtonElement>()
  );

  const [isPointerEvnets, setPointerEvents] = useState(true);
  const [focusIndexArray, setFocusIndexArray] = useState<boolean[]>(
    new Array(suggestions.length).fill(false)
  );

  const onFocusHandler = (index: number) => {
    const newArray = [...focusIndexArray];
    newArray.fill(false);
    newArray[index] = true;
    setFocusIndexArray(newArray);
  };

  const onMouseOver = (index: number) => {
    buttonRef[index]?.current?.focus();
  };

  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    setPointerEvents(true);

    const focusIndex =
      focusIndexArray.findIndex((item) => item) +
      (e.key === 'ArrowUp' ? -1 : e.key === 'ArrowDown' ? 1 : 0);

    onMouseOver(focusIndex);
  };

  const setSuggestText = (value: string) => () => {
    dispath(setSearchText(value));
  };

  return (
    <React.Fragment>
      {suggestions.length !== 0 && (
        <div
          className={styles.Suggest}
          onMouseMove={() =>
            isPointerEvnets ? setPointerEvents(false) : undefined
          }
        >
          <ul
            className={clsx(styles.Suggest__list, {
              [styles.Suggest__listPointerEvents]: isPointerEvnets,
            })}
          >
            {suggestions.map((item, index) => (
              <li className={styles.Suggest__listItem} key={index}>
                <button
                  className={styles.Suggest__listButton}
                  onClick={setSuggestText(item.animeName)}
                  onMouseOver={() => onMouseOver(index)}
                  onKeyDown={onKeyPressHandler}
                  onFocus={() => onFocusHandler(index)}
                  aria-label={`${item.animeName}を検索するボタン`}
                  ref={buttonRef[index]}
                >
                  {item.animeName}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default React.memo(Suggest);
