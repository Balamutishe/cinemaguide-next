import { Header } from "@/app/widgets/header";
import { Footer } from "@/app/widgets/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="px-10 py-4">Main</main>
      <Footer />
    </>
  );
}
