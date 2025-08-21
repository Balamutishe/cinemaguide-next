import Image from "next/image";
import NoImage from "@/images/no_image.png";
import { FC } from "react";
import { TMovieList } from "../types/movie";

interface IListProps {
  title: string;
  movieList: TMovieList;
}

export const List: FC<IListProps> = ({ title, movieList }) => {
  return (
    <section>
      <h2 className="mb-10 text-4xl font-bold">{title}</h2>
      <ul className="grid min-h-170 grid-cols-5 grid-rows-2 gap-8">
        {movieList.map((movie) => (
          <li key={movie.id} className="relative">
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
          </li>
        ))}
      </ul>
    </section>
  );
};
