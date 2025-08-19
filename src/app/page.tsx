import { Header } from "@/app/widgets/header";
import { Footer } from "@/app/widgets/footer";
import { Preview } from "./widgets/preview";
import { Main } from "./widgets/main";
import { List } from "./widgets/list";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Preview />
        <List />
      </Main>
      <Footer />
    </>
  );
}
