import Image from "next/image"
import prototype from '../../images/Prototype.webp';

export default function Screen() {

     return <section className="text-white bg-[#151515] h-[250%] pb-6 max-[767px]:h-[20%] max-[767px]:pb-[1rem]">
          <div className="relative rotate-90 w-[5%] top-[45%] max-[767px]:border-r-0">
               <h2 className="font-cardinal font-normal p-6 text-[2vw] max-[767px]:text-[4vw]">PROTOTYPING</h2>
          </div>
          <section className="flex justify-center items-center">
               <div className="flex justify-start mt-[32em] w-[20%] max-[767px]:w-[50%] max-[767px]:hidden">
                    <h3 className="font-graphik font-bold text-[14px] leading-6 uppercase">First start Figma to sketch file and see what's the different file and structure uses. how it real life happens</h3>
               </div>
               <div className="flex justify-end w-[50%]">
                    <Image src={prototype} alt="prototyping image" width={400} height={400} priority />
               </div>
          </section>
     </section>

}