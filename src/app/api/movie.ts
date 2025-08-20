import axios from "axios";
import { MovieSchema } from "../types/movie";

const instance = axios.create({
  baseURL: "https://cinemaguide.skillbox.cc",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const getRandomFilm = () =>
  instance.get("/movie/random").then((res) => MovieSchema.parse(res.data));
