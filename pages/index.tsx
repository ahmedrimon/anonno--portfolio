import Asset from "../components/Asset/Asset";
import Design from "../components/Design/Design";
import Footer from "../components/Footer/Footer";
import FooterLast from "../components/FooterLast/FooterLast";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Screen from "../components/Screen/Screen";
import LenisScroll from "../Hooks/LenisScroll";

export default function Home() {

     return <div>
          {/* <LenisScroll></LenisScroll> */}
          <div className="bg-[#F7ECDD]">
               <Navbar />
               <Hero />
          </div>
          <Screen />
          <Design />
          <Asset />
          <Footer />
          <FooterLast />
     </div>
}
