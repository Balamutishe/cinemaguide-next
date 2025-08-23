import { Suspense } from "react";
import Header from "../widgets/header";
import { Main } from "../widgets/main";
import { List } from "../widgets/list";
import { Footer } from "../widgets/footer";
import { getMovies } from "../api/movie";

export default async function Page(props: {
  searchParams: Promise<{
    page?: string;
    count?: string;
    title?: string;
    genre?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const searchString = Object.entries(searchParams)
    .flatMap(([key, value]) => `${key}=${value}`)
    .toString()
    .replaceAll(",", "&");

  const filmsData = await getMovies(searchString);

  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<div>Loading list movies...</div>}>
          <List
            title={searchParams?.genre || "Жанр не найден"}
            movieList={filmsData}
          />
        </Suspense>
      </Main>
      <Footer />
    </>
  );
}
