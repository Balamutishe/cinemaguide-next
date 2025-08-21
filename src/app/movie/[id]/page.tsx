import { getMovie } from "@/app/api/movie";
import { Footer } from "@/app/widgets/footer";
import { Header } from "@/app/widgets/header";
import { Main } from "@/app/widgets/main";
import { Preview } from "@/app/widgets/preview";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function Page(props: { params: { id?: string } }) {
  if (!props.params.id) notFound();

  const filmData = await getMovie(props.params.id);

  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<div>Loading preview film...</div>}>
          <Preview variant="specific" filmData={filmData} />
        </Suspense>
      </Main>
      <Footer />
    </>
  );
}
