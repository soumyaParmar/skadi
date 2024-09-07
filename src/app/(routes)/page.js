import Image from "next/image";
import Hero from "../_components/Heropage/Hero";
import Navbar from "../_common/Navbar/Navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Hero/>
    </main>
  );
}
