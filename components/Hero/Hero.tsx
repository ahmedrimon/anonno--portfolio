import Image from 'next/image';
import area from '../../images/area.jpg';

export default function Hero() {
     return <section className="overflow-x-hidden">
          <h1 className="font-antiga text-[16vw] font-normal flex justify-center items-center max-[767px]:text-[16vw]">WEB DEVELOPER</h1>
          <section className="pb-[2em]">
               <main className="flex">
                    <div className="w-[30%]">
                         <h3 className="font-graphik tracking-wide font-bold ml-[14em] text-[16px] leading-5">EXPERIENCE SOMETHING THAT NOT EXCUSE TO BE BETTER EXPERIMENT</h3>
                         <h3 className="font-graphik tracking-wide font-bold ml-[14em] text-[16px] leading-6 mt-5">WORKING THIS ENVIROMENT AROUND TWO YEARS, SO JUST WORKING TOWARDS PATH. VISUAL HIERARCHY IS MOST IMPORTANT FACTOR</h3>
                    </div>
                    <div className="w-[30%]">
                         <h3 className="font-graphik tracking-wide font-bold ml-[4em] text-[16px] leading-6 mt-[4em]">THE JOURNEY THAT I TOOK ITS POWERFUL LOTS OF WAY. SO TURN AROUND THE PLACE JUST MOVING ON A FREE FOLKLORE. WHERE COMFORTABLE ANY TOUCH AND ANY IDEA. USED TO BETTER EXPERIENCE AND PERFORMANCE ALSO VISIBILITIES. DRIVE THROUGH ART PHASE CHALLANGES FROM EVERY ASPECT</h3>
                    </div>
                    <div className="w-[10%] ml-[9em]">
                         <Image
                              src={area}
                              alt="Picture of the art"
                              width={200}
                              height={300}
                         />
                    </div>
               </main>
          </section>
          {/* <main className="w-[40%]">
               
          </main> */}
     </section>
}