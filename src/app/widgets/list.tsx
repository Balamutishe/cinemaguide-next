import Image from "next/image";
import PreviewFilmImg from "@/images/listItemPreviewTest.jpg";

export const List = () => {
  return (
    <section>
      <h2 className="mb-10 text-4xl font-bold">Топ 10 фильмов</h2>
      <ul className="grid grid-cols-5 grid-rows-2 gap-8">
        <li className="relative">
          <span className="absolute top-[-0.2rem] left-[-1rem] rounded-3xl bg-white px-5 py-1 font-bold text-(--elem-color-hover-focus)">
            10
          </span>
          <Image
            src={PreviewFilmImg}
            alt="PreviewFilmImg"
            className="h-full w-full rounded-2xl"
          />
        </li>
        <li className="relative">
          <span className="absolute top-[-0.2rem] left-[-1rem] rounded-3xl bg-white px-5 py-1 font-bold text-(--elem-color-hover-focus)">
            10
          </span>
          <Image
            src={PreviewFilmImg}
            alt="PreviewFilmImg"
            className="h-full w-full rounded-2xl"
          />
        </li>
        <li className="relative">
          <span className="absolute top-[-0.2rem] left-[-1rem] rounded-3xl bg-white px-5 py-1 font-bold text-(--elem-color-hover-focus)">
            10
          </span>
          <Image
            src={PreviewFilmImg}
            alt="PreviewFilmImg"
            className="h-full w-full rounded-2xl"
          />
        </li>
        <li className="relative">
          <span className="absolute top-[-0.2rem] left-[-1rem] rounded-3xl bg-white px-5 py-1 font-bold text-(--elem-color-hover-focus)">
            10
          </span>
          <Image
            src={PreviewFilmImg}
            alt="PreviewFilmImg"
            className="h-full w-full rounded-2xl"
          />
        </li>
        <li className="relative">
          <span className="absolute top-[-0.2rem] left-[-1rem] rounded-3xl bg-white px-5 py-1 font-bold text-(--elem-color-hover-focus)">
            10
          </span>
          <Image
            src={PreviewFilmImg}
            alt="PreviewFilmImg"
            className="h-full w-full rounded-2xl"
          />
        </li>
        <li className="relative">
          <span className="absolute top-[-0.2rem] left-[-1rem] rounded-3xl bg-white px-5 py-1 font-bold text-(--elem-color-hover-focus)">
            10
          </span>
          <Image
            src={PreviewFilmImg}
            alt="PreviewFilmImg"
            className="h-full w-full rounded-2xl"
          />
        </li>
        <li className="relative">
          <span className="absolute top-[-0.2rem] left-[-1rem] rounded-3xl bg-white px-5 py-1 font-bold text-(--elem-color-hover-focus)">
            10
          </span>
          <Image
            src={PreviewFilmImg}
            alt="PreviewFilmImg"
            className="h-full w-full rounded-2xl"
          />
        </li>
        <li className="relative">
          <span className="absolute top-[-0.2rem] left-[-1rem] rounded-3xl bg-white px-5 py-1 font-bold text-(--elem-color-hover-focus)">
            10
          </span>
          <Image
            src={PreviewFilmImg}
            alt="PreviewFilmImg"
            className="h-full w-full rounded-2xl"
          />
        </li>
        <li className="relative">
          <span className="absolute top-[-0.2rem] left-[-1rem] rounded-3xl bg-white px-5 py-1 font-bold text-(--elem-color-hover-focus)">
            10
          </span>
          <Image
            src={PreviewFilmImg}
            alt="PreviewFilmImg"
            className="h-full w-full rounded-2xl"
          />
        </li>
        <li className="relative">
          <span className="absolute top-[-0.2rem] left-[-1rem] rounded-3xl bg-white px-5 py-1 font-bold text-(--elem-color-hover-focus)">
            10
          </span>
          <Image
            src={PreviewFilmImg}
            alt="PreviewFilmImg"
            className="h-full w-full rounded-2xl"
          />
        </li>
      </ul>
    </section>
  );
};
