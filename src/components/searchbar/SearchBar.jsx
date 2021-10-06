import React, { useCallback } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ search, setQuery, query }) => {
  const handlerSearch = useCallback(
    (event) => {
      search(event);
      setQuery("");
    },
    [search, setQuery]
  );

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm}>
        <button
          type="submit"
          className={styles.SearchFormButton}
          onClick={handlerSearch}
        >
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </form>
    </header>
  );
};

export default SearchBar;
