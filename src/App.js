import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/searchbar";
import ImageGallery from "./components/imageGallery";
import Button from "./components/button";
import getQuery from "./api/getQuery";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);

  useEffect(() => {
    getQuery(query, page).then((images) => setImages(images));
  }, [page, query]);

  const addQuery = (text) => {
    setQuery(text);
    console.log(text);
  };

  const onLoadMore = () => {
    setPage(page + 1);
    console.log(page);
    getQuery(query, page).then((newImages) =>
      setImages([...images, ...newImages])
    );
  };

  return (
    <div className="App">
      <SearchBar onSubmit={addQuery} />
      <ImageGallery images={images} />
      <Button onLoadMore={onLoadMore} />
    </div>
  );
};

export default App;
