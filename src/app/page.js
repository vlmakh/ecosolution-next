import { Main } from "@/blocks/Main/Main";
import { About } from "@/blocks/About/About";
import { Values } from "@/blocks/Values/Values";
import { Electricity } from "@/blocks/Electricity/Electricity";
import { Services } from "@/blocks/Services/Services";
import { Cases } from "@/blocks/Cases/Cases";

export default function Home() {
  return (
    <>
      <Main />

      <About />

      <Values />

      <Electricity />

      <Services />

      <Cases />
    </>
  );
}
