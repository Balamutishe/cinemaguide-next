import Image from "next/image";
import { Button } from "../ui/button";
import { HeartIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { FC } from "react";
import { TMovie } from "../types/movie";
import { revalidatePath } from "next/cache";
import NoImage from "@/images/no_image.png";
import clsx from "clsx";

interface IPreviewProps {
  filmData: TMovie;
}

export const Preview: FC<IPreviewProps> = ({ filmData }) => {
  return (
    <section className="mb-10 grid h-[586px] grid-cols-2 justify-between gap-x-8">
      <PreviewContent filmData={filmData} />
      <PreviewImage posterUrl={filmData.posterUrl} />
    </section>
  );
};

interface IPreviewContentProps {
  filmData: TMovie;
}

const PreviewContent: FC<IPreviewContentProps> = ({ filmData }) => {
  async function revalidate() {
    "use server";
    revalidatePath("/");
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="mb-16">
        <div className="mb-4 flex items-center text-base opacity-70">
          <span
            className={clsx(
              "mr-4 flex justify-between rounded-2xl bg-green-500 px-4 py-1",
              {
                "bg-red-500": filmData.tmdbRating < 4,
                "bg-yellow-500":
                  filmData.tmdbRating >= 4 && filmData.tmdbRating < 7,
                "bg-green-500": filmData.tmdbRating >= 7,
              },
            )}
          >
            <StarIcon className="mr-2 h-5 w-5 text-white" />
            <span className="text-md font-extrabold">
              {filmData.tmdbRating}
            </span>
          </span>
          <span>
            {filmData.genres.map(
              (genre, index) =>
                index < 3 && (
                  <span key={index} className="mr-4">
                    {genre}
                  </span>
                ),
            )}
          </span>
          <span>{filmData.relaseYear}</span>
          <span>{filmData.runtime} min</span>
        </div>
        <h1 className="mb-4 text-5xl font-bold">{filmData.title}</h1>
        <p
          className="text-2xl font-light opacity-70"
          style={{
            display: "-webkit-box",
            lineClamp: "initial",
            WebkitLineClamp: "5",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {filmData.plot}
        </p>
      </div>
      <div className="flex w-[85%] justify-between">
        <Button variant="primary">Трейлер</Button>
        <Button variant="default">О фильме</Button>
        <Button variant="default">
          {<HeartIcon className="h-5 w-4.5 text-white" />}
        </Button>
        <form action={revalidate}>
          <Button variant="default" type="submit">
            {<ArrowPathIcon className="h-5 w-4.5 text-white" />}
          </Button>
        </form>
      </div>
    </div>
  );
};

interface IPreviewImageProps {
  posterUrl: string | null;
}

const PreviewImage: FC<IPreviewImageProps> = ({ posterUrl }) => {
  return (
    <div className="relative">
      <Image
        fill={true}
        sizes="100vw, 100vw"
        src={posterUrl ? posterUrl : NoImage}
        alt="Preview image"
        className="rounded-3xl shadow-xl/50 shadow"
      />
    </div>
  );
};
