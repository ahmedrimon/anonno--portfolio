import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Screen from "../components/Screen/Screen";


export default function Home() {


     return <div>
          <div className="bg-[#F7ECDD]">
               <Navbar />
               <Hero />
          </div>
          <Screen />
     </div>
}