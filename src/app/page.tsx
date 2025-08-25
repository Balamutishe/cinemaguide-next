"use server";

import Header from "@/app/widgets/header";
import { Footer } from "@/app/widgets/footer";
import { Preview } from "./widgets/preview";
import { Main } from "./widgets/main";
import { List } from "./widgets/list";
import { getRandomFilm, getTopFilms } from "./api/movie";
import { Modal } from "./widgets/modal";

export default async function Home() {
  const randomFilmData = await getRandomFilm();
  const topFilmsData = await getTopFilms();

  return (
    <>
      <Header />
      <Main>
        <Preview variant="random" filmData={randomFilmData} />
        <List title="Топ 10 фильмов" movieList={topFilmsData} />
        <Modal />
      </Main>
      <Footer />
    </>
  );
}
