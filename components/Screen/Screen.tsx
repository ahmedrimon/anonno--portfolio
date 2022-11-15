import Image from "next/image"
import prototype from '../../images/Ptototyping.webp';

export default function Screen() {

     return <section className="text-white bg-[#151515] h-screen">
          <div className="relative rotate-90 w-[5%] top-[45%] border-r-2">
               <h1 className="font-cardinal font-normal text-[2vw]">PROTOTYPING</h1>
          </div>
          <div>
               <h3 className="font-graphik font-bold text-[16px] leading-6 uppercase">First start Figma to sketch file and see what's the different file and structure uses. how it real life happens</h3>
          </div>
          <div>
               <Image src={prototype} alt="prototyping image" width="400" height="400" />
          </div>
     </section>

}