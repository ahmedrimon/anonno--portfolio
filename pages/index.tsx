import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {

     return <div className="bg-[#F7ECDD] h-screen w-screen overflow-x-hidden">
          <Navbar />
          <Hero />
     </div>
}