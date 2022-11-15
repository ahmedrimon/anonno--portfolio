import Image from 'next/image';
import area from '../../images/area.webp';

export default function Hero() {
     return <section>
          <h1 className="font-antiga text-[16vw] font-normal flex justify-center items-center max-[767px]:text-[16vw]">WEB DEVELOPER</h1>
          <section className="pb-[2em] max-[767px]:mt-[2em]">
               <main className="flex">
                    <div className="w-[30%] max-[1280px]:w-[40%] max-[1023px]:w-[40%] max-[767px]:w-[50%]">
                         <h3 className="font-graphik tracking-wide font-bold ml-[14em] text-[16px] leading-5 max-[1023px]:ml-[2em] max-[767px]:ml-[2em]">EXPERIENCE SOMETHING THAT NOT EXCUSE TO BE BETTER EXPERIMENT</h3>
                         <h3 className="font-graphik tracking-wide font-bold ml-[14em] text-[16px] leading-6 mt-5 max-[1023px]:ml-[2em] max-[767px]:ml-[2em]">WORKING THIS ENVIROMENT AROUND TWO YEARS, SO JUST WORKING TOWARDS PATH. VISUAL HIERARCHY IS MOST IMPORTANT FACTOR</h3>
                    </div>
                    <div className="w-[30%] max-[1280px]:w-[30%] max-[1023px]:w-[30%] max-[767px]:w-[40%]">
                         <h3 className="font-graphik tracking-wide font-bold ml-[4em] text-[16px] leading-6 mt-[4em] max-[767px]:ml-[1em]">THE JOURNEY THAT I TOOK ITS POWERFUL LOTS OF WAY. SO TURN AROUND THE PLACE JUST MOVING ON A FREE FOLKLORE. WHERE COMFORTABLE ANY TOUCH AND ANY IDEA. USED TO BETTER EXPERIENCE AND PERFORMANCE ALSO VISIBILITIES. DRIVE THROUGH ART PHASE CHALLANGES FROM EVERY ASPECT</h3>
                    </div>
                    <div className="w-[10%] ml-[9em] max-[1280px]:w-[20%] max-[1280px]:ml-[4em] max-[1023px]:w-[30%] max-[767px]:hidden">
                         <Image
                              src={area}
                              alt="Picture of the art"
                              width={200}
                              height={300}
                         />
                    </div>
               </main>
          </section>
     </section>
}