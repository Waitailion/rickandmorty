import React from "react";
import styles from "./Search.module.scss";

const Search = ({ setSearch, updatePageNumber }) => {
  return (
    <form
      className={`${styles.search}  mb-5 d-flex flex-sm-row flex-column align-items-center justify-content-center `}
    >
      <input
        onChange={(e) => {
          updatePageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Type search"
        className={styles.input}
        type="text"
      />
    </form>
  );
};

export default Search;
