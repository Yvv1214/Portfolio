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
        <img className="border border-green-200 rounded w-5/12" src="#" alt="Greengarb" ></img>
       <div className="column border border-red-200 w-7/12">
        <div className="p-2 w-50">content shopping markertplace users store user store view from their account filter clothing tags</div>
        <div className="p-2"> React Python Flask Bootstrap</div>
        <div className="flex justify-center w-full">
          <button className="bg-green-400 rounded p-1">Live Preview</button>
        </div>
      </div>
      </div>
      <Footer/>

    </main>
  );
}
