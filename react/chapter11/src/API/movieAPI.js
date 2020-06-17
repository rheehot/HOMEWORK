import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

const getPopular = () =>
  api
    .get("movie/popular?api_key=10923b261ba94d897ac6b81148314a3f&page=1")
    .then((r) => r.data);

const upComing = () =>
  api
    .get("movie/upcoming?api_key=10923b261ba94d897ac6b81148314a3f&page=1")
    .then((r) => r.data);

const nowPlaying = () =>
  api
    .get("movie/now_playing?api_key=10923b261ba94d897ac6b81148314a3f")
    .then((r) => r.data);

const movieSearch = (term) =>
  api
    .get("search/movie?api_key=10923b261ba94d897ac6b81148314a3f", {
      params: {
        query: encodeURIComponent(term),
      },
    })
    .then((r) => r.data);

const movieInfo = (id) =>
  api.get(`movie/${id}?api_key=10923b261ba94d897ac6b81148314a3f`, {
    params: {
      append_to_response: "videos",
    },
  });

const movie = { getPopular, upComing, nowPlaying, movieSearch, movieInfo };
export default movie;
