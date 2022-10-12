import React from "react";
import MemeBoxItem from "../component/MemeBoxItem";

const MemeListPage = () => {
  return (
    <div className="App">
      <header id="meme-page" className="App-header">
        <h1 id="meme-page-title">Memes</h1>
        <p id="meme-page-description">This is the Memes page</p>
        <MemeBoxItem />
      </header>
    </div>
  );
};

export default MemeListPage;
