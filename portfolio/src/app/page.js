import Image from "next/image";
import { Navbar } from "./Componets/Navbar";
import { TechStack } from "./Componets/TechStack";
import { Footer } from "./Componets/Footer";



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
      <div className="flex border rounded m-4 p-2">
        <img className="border border-green-200 rounded" src="#" alt="Greengarb" ></img>
       <div className="column border border-red-200">
        <div>content</div>
        <div>tech used</div>
      </div>
      </div>
      <Footer/>

    </main>
  );
}
