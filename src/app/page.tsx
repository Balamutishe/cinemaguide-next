import { Header } from "@/app/widgets/header";
import { Footer } from "@/app/widgets/footer";
import { Preview } from "./widgets/preview";
import { Main } from "./widgets/main";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Preview />
      </Main>
      <Footer />
    </>
  );
}
