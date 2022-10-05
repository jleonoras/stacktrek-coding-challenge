import TopBar from "./component/TopBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./page/About";
import Home from "./page/Home";
import MovieListPage from "./page/MovieListPage";
import Error from "./page/Error";
import MemeListPage from "./page/MemeListPage";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieListPage />} />
        <Route path="/memes" element={<MemeListPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
