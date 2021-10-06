import "./App.css";
import React from "react";
import SearchBarContainer from "./components/searchbar/SearchBarContainer";
import ImageGallery from "./components/imageGallery/ImageGallery";

const App = () => {
  return (
    <div className="App">
      <SearchBarContainer />
      <ImageGallery />
    </div>
  );
};

export default App;
