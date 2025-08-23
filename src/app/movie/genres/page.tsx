import { getImageFromData } from "@/app/utils/getImageFromData";
import { Footer } from "@/app/widgets/footer";
import Header from "@/app/widgets/header";
import { List } from "@/app/widgets/list";
import { Main } from "@/app/widgets/main";
import { Suspense } from "react";

export default async function Page() {
  const genresData = await getImageFromData();

  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<div>Loading list genres...</div>}>
          <List title="Жанры" genresList={genresData} />
        </Suspense>
      </Main>
      <Footer />
    </>
  );
}
