import React from "react";
import MemeBoxItem from "../component/MemeBoxItem";

const MemeListPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memes</h1>
        <p>This is the Memes page</p>
        <MemeBoxItem />
      </header>
    </div>
  );
};

export default MemeListPage;
