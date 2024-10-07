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

      <div className="flex border rounded m-4 p-2 shadow-xl">
        <img className="border border-green-200 rounded w-5/12" src="#" alt="Greengarb" ></img>
        <div className="column border border-red-200 w-7/12">
          <div className="p-2 w-50">Greengarb is an innovative eco marketplace dedicated to sustainable, ethical, and eco-friendly fashion. Focusing on clothing made from natural fibers, Greengarb ensures that every item meets high standards of environmental responsibility and ethical production. Whether you're a conscious shopper looking for sustainable apparel or a passionate seller wanting to showcase your eco-friendly clothing line, Greengarb offers a platform for both. Users can create personalized stores, display their products, and connect with a community that values fashion with a positive impact on the planet.</div>
          
          <div className="p-2 flex justify-around">
            <span className="rounded bg-cyan-300 p-1 mb-2">React</span>
            <span className="rounded bg-cyan-300 p-1 mb-2">Flask</span>
            <span className="rounded bg-cyan-300 p-1 mb-2">Python</span>
            <span className="rounded bg-cyan-300 p-1 mb-2">Bootstrap</span>
          </div>
          <div className="flex justify-center w-full mb-2">
            <button className="bg-green-400 rounded-full p-2">Live Preview</button>
          </div>
        </div>
      </div>
      <Footer />

    </main>
  );
}
