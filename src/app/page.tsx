"use server";

import Header from "@/app/widgets/header";
import { Footer } from "@/app/widgets/footer";
import { Preview } from "./widgets/preview";
import { Main } from "./widgets/main";
import { List } from "./widgets/list";
import { getRandomFilm, getTopFilms } from "./api/movie";
import { Suspense } from "react";

export default async function Home() {
  const randomFilmData = await getRandomFilm();
  const topFilmsData = await getTopFilms();

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <Main>
        <Suspense fallback={<div>Loading preview random film...</div>}>
          <Preview variant="random" filmData={randomFilmData} />
        </Suspense>
        <Suspense fallback={<div>Loading list movies...</div>}>
          <List title="Топ 10 фильмов" movieList={topFilmsData} />
        </Suspense>
      </Main>
      <Footer />
    </>
  );
}
