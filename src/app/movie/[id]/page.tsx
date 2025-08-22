import { getMovie } from "@/app/api/movie";
import { Footer } from "@/app/widgets/footer";
import { Header } from "@/app/widgets/header";
import { Main } from "@/app/widgets/main";
import { Preview } from "@/app/widgets/preview";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function Page(props: {
  params: Promise<{ id?: string }>;
}) {
  const params = await props.params;

  if (!params.id) notFound();

  const filmData = await getMovie(params.id);

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
