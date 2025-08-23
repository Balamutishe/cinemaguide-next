import Image from "next/image";
import NoImage from "@/images/no_image.png";
import { FC } from "react";
import { TMovieList } from "../types/movie";
import Link from "next/link";
import clsx from "clsx";
import Pagination from "./pagination";

interface IListProps {
  title: string;
  movieList?: TMovieList;
  genresList?: { genre: string; posterUrl: string }[];
}

export const List: FC<IListProps> = ({ title, movieList, genresList }) => {
  return (
    <section>
      <div className="flex justify-between">
        <h2 className="mb-10 text-4xl font-bold">{title}</h2>
        {title !== "Топ 10 фильмов" && movieList && (
          <Pagination totalPages={movieList.length} />
        )}
      </div>
      <ul
        className={clsx("grid gap-8", {
          "grid-cols-5 grid-rows-2": movieList,
          "grid-cols-4": genresList,
        })}
      >
        {movieList && <MoviesItems movieList={movieList} />}
        {genresList && <GenresItems genresList={genresList} />}
      </ul>
    </section>
  );
};

interface IMoviesItemsProps {
  movieList?: TMovieList;
}

const MoviesItems: FC<IMoviesItemsProps> = ({ movieList }) => {
  return movieList!.map((movie) => (
    <li key={movie.id} className="relative min-h-76">
      <Link href={`movie/${movie.id}`}>
        <span
          className={clsx(
            "absolute top-[-0.2rem] left-[-1rem] z-10 rounded-3xl bg-white px-5 py-1 font-bold text-(--elem-color-hover-focus)",
            {
              "text-green-500": movie.tmdbRating >= 7,
              "text-yellow-500": movie.tmdbRating < 7,
              "text-red-500": movie.tmdbRating < 5,
            },
          )}
        >
          {movie.tmdbRating.toFixed(1)}
        </span>
        <div className="relative z-0 h-full w-full rounded-2xl">
          <Image
            fill
            sizes="100vw, 100vw"
            src={movie.posterUrl ? movie.posterUrl : NoImage}
            alt="PreviewFilmImg"
            className="rounded-2xl"
          />
        </div>
      </Link>
    </li>
  ));
};

interface IGenresItemsProps {
  genresList?: { genre: string; posterUrl: string }[];
}

const GenresItems: FC<IGenresItemsProps> = ({ genresList }) => {
  return genresList!.map((item) => (
    <li key={crypto.randomUUID()} className="min-h-76 rounded-2xl bg-black">
      <Link href={`/movie?genre=${item.genre}&count=15`}>
        <div className="relative z-0 h-[70%] w-full rounded-t-2xl">
          <Image
            fill
            sizes="100vw, 100vw"
            src={item.posterUrl ? item.posterUrl : NoImage}
            alt="PreviewFilmImg"
            className="z-0 h-full w-full rounded-t-2xl"
          />
        </div>
        <div className="flex h-[30%] items-center justify-center">
          {item.genre}
        </div>
      </Link>
    </li>
  ));
};
