import Image from "next/image";
import { Navbar } from "./Componets/Navbar";
import { TechStack } from "./Componets/TechStack";



export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="homeBanner">
        <div>Hello, my name Yaira Velez</div>
        <div>image</div>
      </div>
      <TechStack />
      <h2 className="text-2xl text-center font-bold">Projects</h2>
      <div className="border rounded m-4 p-2">
        <div>images</div>
        <div>content</div>
        <div>tech used</div>
      </div>

    </main>
  );
}
