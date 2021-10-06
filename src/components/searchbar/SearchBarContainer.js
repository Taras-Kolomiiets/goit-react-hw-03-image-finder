import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getImagesActions } from "./actions";
import getQuery from "../../api/getQuery";
import SearchBar from "./SearchBar";

const SearchBarContainer = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handlerGetImagesActions = useCallback(
    (data) => {
      dispatch(getImagesActions(data));
    },
    [dispatch]
  );

  useEffect(() => {
    getQuery("", handlerGetImagesActions);
  }, [handlerGetImagesActions]);

  const search = (event) => {
    event.preventDefault();
    getQuery(query, handlerGetImagesActions);
  };

  return <SearchBar search={search} setQuery={setQuery} query={query} />;
};

export default SearchBarContainer;
