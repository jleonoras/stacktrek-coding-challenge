import TopBar from "./component/TopBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./about/About";
import Home from "./home/Home";
import MovieListPage from "./movie/MovieListPage";
import Error from "./error/Error";
import MemeListPage from "./meme/MemeListPage";

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
