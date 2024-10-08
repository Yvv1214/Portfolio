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
      {/* project div----------------------------------------------------------------- */}
      <div className="flex border rounded m-4 p-2 shadow-xl mb-12">
        <img className="border rounded w-5/12" src="#" alt="Greengarb" ></img>
        <div className="column w-7/12">
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
      <div className="flex border rounded m-4 p-2 shadow-xl mb-12">
        <img className="border rounded w-5/12" src="#" alt="Greengarb" ></img>
        <div className="column w-7/12">
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
      <div className="flex border rounded m-4 p-2 shadow-xl mb-12">
        <img className="border rounded w-5/12" src="#" alt="Greengarb" ></img>
        <div className="column w-7/12">
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
      {/* Contributions--------------------------------------------------------------- */}
      <h2 className="text-2xl text-center font-bold">Contributions</h2>
      <div className="border rounded m-4 p-2 column-1">
        <h2 className="text-center font-bold">MakeitMVP</h2>
        <div className="align-baseline border">video</div>
        <p className="p-2 border rounded">As a full stack developer at MakeitMVP, I played a key role in the development of CoffeeChat and Member Achievement, two essential features of the Community app. CoffeeChat allows members to connect for networking and collaboration, enhancing user engagement through personalized match-ups. I worked on both the front-end and back-end, ensuring seamless integration and user-friendly design. Additionally, I contributed to the Member Achievement feature, which highlights user milestones and contributions within the community, fostering a sense of accomplishment and encouraging active participation. These features helped boost engagement and strengthen the overall community experience.</p>
      </div>
      <Footer />

    </main>
  );
}
