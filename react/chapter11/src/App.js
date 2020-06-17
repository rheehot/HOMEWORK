import React, { useState } from "react";
import "./App.css";
import movie from "./API/movieAPI";

function App() {
  const [movieState, setMovieState] = useState({
    data: "",
  });
  console.log(movieState);
  const click = async (btnCase) => {
    switch (btnCase) {
      case "upComing":
        const upComing = await movie.upComing();
        setMovieState({ ...movieState, data: upComing });
        break;
      case "getPopular":
        const getPopular = await movie.getPopular();
        setMovieState({ ...movieState, data: getPopular });
        break;
      case "nowPlaying":
        const nowPlaying = await movie.nowPlaying();
        setMovieState({ ...movieState, data: nowPlaying });
        break;
      default:
        break;
    }
  };

  const searchEnter = async (e, enterCase) => {
    if (e.keyCode !== 13) return;
    const value = e.target.value;
    switch (enterCase) {
      case "search":
        const movieSearch = await movie.movieSearch(value);
        setMovieState({ ...movieState, data: movieSearch });
        break;
      case "movieId":
        const movieInfo = await movie.movieInfo(value);
        setMovieState({ ...movieState, data: movieInfo });
        break;
      default:
        break;
    }
  };
  return (
    <div className="App">
      <button type="button" onClick={() => click("upComing")}>
        최신영화
      </button>
      <button type="button" onClick={() => click("getPopular")}>
        인기순위
      </button>
      <button type="button" onClick={() => click("nowPlaying")}>
        현재상영작
      </button>
      <input
        type="text"
        placeholder="검색"
        onKeyUp={(e) => searchEnter(e, "search")}
      />
      <input
        type="text"
        placeholder="영화정보확인"
        onKeyUp={(e) => searchEnter(e, "movieId")}
      />
    </div>
  );
}

export default App;
