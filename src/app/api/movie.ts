import axios from "axios";
import {
  MovieListSchema,
  MovieSchema,
  MoviesGenresSchema,
} from "../types/movie";

const instance = axios.create({
  baseURL: "https://cinemaguide.skillbox.cc",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const getRandomFilm = () =>
  instance.get("/movie/random").then((res) => MovieSchema.parse(res.data));

export const getTopFilms = () =>
  instance.get("/movie/top10").then((res) => MovieListSchema.parse(res.data));

export const getMovies = (searchParams?: string) =>
  instance
    .get(`/movie?${searchParams}`)
    .then((res) => MovieListSchema.parse(res.data));

export const getMovie = (id: string) =>
  instance.get(`/movie/${id}`).then((res) => MovieSchema.parse(res.data));

export const getMoviesGenres = () =>
  instance
    .get("/movie/genres")
    .then((res) => MoviesGenresSchema.parse(res.data));
