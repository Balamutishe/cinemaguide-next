import Image from "next/image";
import NoImage from "@/images/no_image.png";
import { FC } from "react";
import { TMovieList } from "../types/movie";
import Link from "next/link";
import clsx from "clsx";

interface IListProps {
  title: string;
  movieList?: TMovieList;
  genresList?: { genre: string; posterUrl: string }[];
}

export const List: FC<IListProps> = ({ title, movieList, genresList }) => {
  return (
    <section>
      <h2 className="mb-10 text-4xl font-bold">{title}</h2>
      <ul
        className={clsx("grid min-h-270 grid-cols-5 gap-8", {
          "grid-rows-2": movieList,
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
    <li key={movie.id} className="relative">
      <Link href={`movie/${movie.id}`}>
        <span className="absolute top-[-0.2rem] left-[-1rem] z-10 rounded-3xl bg-white px-5 py-1 font-bold text-(--elem-color-hover-focus)">
          {movie.tmdbRating}
        </span>
        <Image
          fill={true}
          sizes="100vw, 100vw"
          src={movie.posterUrl ? movie.posterUrl : NoImage}
          alt="PreviewFilmImg"
          className="z-0 h-full w-full rounded-2xl"
        />
      </Link>
    </li>
  ));
};

interface IGenresItemsProps {
  genresList?: { genre: string; posterUrl: string }[];
}

const GenresItems: FC<IGenresItemsProps> = ({ genresList }) => {
  return genresList!.map((item) => (
    <li key={crypto.randomUUID()}>
      <div className="relative h-[90%]">
        <Image
          fill={true}
          sizes="100vw, 100vw"
          src={item.posterUrl ? item.posterUrl : NoImage}
          alt="PreviewFilmImg"
          className="z-0 h-full w-full rounded-2xl"
        />
      </div>
      <div>{item.genre}</div>
    </li>
  ));
};
