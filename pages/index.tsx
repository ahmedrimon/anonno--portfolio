import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Screen from "../components/Screen/Screen";
import ScreenTwo from "../components/ScreenTwo/ScreenTwo";
import ScreenThree from './../components/ScreenThree/ScreenThree';
import ScreenFour from './../components/ScreenFour/ScreenFour';


export default function Home() {


     return <div>
          <div className="bg-[#F7ECDD]">
               <Navbar />
               <Hero />
          </div>
          <Screen />
          <ScreenTwo />
          <ScreenThree />
          <ScreenFour />
     </div>
}
// #F7ECDD