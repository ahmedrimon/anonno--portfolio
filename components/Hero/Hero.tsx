import Image from 'next/image';


export default function Hero() {
     return <section>
          <h1 className="font-antiga text-6xl p-8 sm:text-9xl sm:p-20 md:text-[11rem] font-normal flex justify-center items-center">REACT DEVELOPER</h1>
          <section className="sm:pt-1 2xl:pt-[8rem] max-[767px]:mt-[2em]">
               <main className="flex">
                    <div className="w-[100%]">
                         <h3 className="font-graphik tracking-wide font-bold ml-12 text-[14px] leading-5">EXPERIENCE SOMETHING THAT NOT EXCUSE TO BE BETTER EXPERIMENT</h3>
                         <h3 className="font-graphik tracking-wide font-bold ml-12 mb-12 text-[14px] leading-5 mt-2">WORKING THIS ENVIRONMENT AROUND TWO YEARS, SO JUST WORKING TOWARDS PATH. VISUAL HIERARCHY IS MOST IMPORTANT FACTOR</h3>
                    </div>
                    <div className="hidden w-[30%] md:w-[45%] max-[1280px]:w-[30%] max-[1023px]:w-[30%] max-[767px]:w-[40%]">
                         <h3 className="font-graphik tracking-wide font-bold ml-[4em] md:ml-[12em] text-[14px] leading-6 mt-[4em] max-[767px]:ml-[1em]">THE JOURNEY THAT I TOOK ITS POWERFUL LOTS OF WAY. SO TURN AROUND THE PLACE JUST MOVING ON A FREE FOLKLORE. WHERE COMFORTABLE ANY TOUCH AND ANY IDEA. USED TO BETTER EXPERIENCE AND PERFORMANCE ALSO VISIBILITIES. DRIVE THROUGH ART PHASE CHALLANGES FROM EVERY ASPECT</h3>
                    </div>
                    <div className="hidden w-[10%] ml-[9em] sm:hidden md:hidden max-[1280px]:w-[20%] max-[1280px]:ml-[4em] max-[1023px]:w-[30%]">
                         <Image
                              src="/area.webp"
                              alt="Picture of the art"
                              width={200}
                              height={300}
                              priority
                         />
                    </div>
               </main>
          </section>
     </section>
}