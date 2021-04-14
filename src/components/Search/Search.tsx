import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText, setSuggestText, GlobalState } from '../../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';

const Search: React.FC = () => {
  const store = useSelector<GlobalState, GlobalState>((state) => state);
  const dispath = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (store.suggestText) {
      dispath(setSearchText(store.suggestText));
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispath(setSuggestText(e.target.value));
  };

  const resetHandler = () => {
    dispath(setSearchText(''));
    dispath(setSuggestText(''));

    inputRef.current?.focus();
  };

  return (
    <form className={styles.Search} onSubmit={searchHandler} role="search">
      <label className="util-hidden" htmlFor="search">
        アニメタイトル、アニメソングタイトル、「2011
        春」のように年と季節からアニメを検索するフォーム
      </label>
      <input
        id="search"
        type="text"
        className={`${styles.Search__input} util-focus`}
        placeholder="アニメタイトルまたは年と季節を入力"
        onChange={changeHandler}
        autoComplete="off"
        ref={inputRef}
        value={
          store.searchFlag
            ? store.searchText
              ? store.searchText
              : `${store.searchYear} ${store.searchSeason}`
            : store.suggestText
        }
      />
      <div className={styles.Search__button}>
        {(store.searchText ||
          store.suggestText ||
          (store.searchYear && store.searchSeason)) && (
          <button
            onClick={resetHandler}
            type="button"
            className={`${styles.Search__buttonItem} util-focus`}
            aria-label="入力されているキーワードを削除するボタン"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}
        <button
          className={`${styles.Search__buttonItem} util-focus`}
          aria-label="入力されたキーワードを検索するボタン"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

export default Search;
