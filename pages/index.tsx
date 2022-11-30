import Asset from "../components/Asset/Asset";
import Design from "../components/Design/Design";
import Footer from "../components/Footer/Footer";
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
          <Design />
          <Asset />
          <Footer />
     </div>
}
