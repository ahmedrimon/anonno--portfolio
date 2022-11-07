import { useEffect, useRef } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Screen() {
     const el = useRef(null);

     useEffect(() => {
          gsap.to(".third", {
               scrollTrigger: {
                    trigger: ".third"
               },
               x: 400,
               rotation: 360,
               duration: 3
          });
     }, [])

     return <section>
          <h1 className="font-antiga font-normal text-[10vw] ml-[5em]">Work Inside</h1>
          <main className="mb-[5%]">
               <div className="flex justify-center items-center">
                    <div className="first flex justify-center items-center font-graphik text-[2em] bg-indigo-400 bg-contain w-[5%]">a</div>
               </div>
               <div className="flex justify-center items-center">
                    <div className="second flex justify-center items-center font-graphik text-[2em] bg-indigo-400 mt-3 w-[5%]">b</div>
               </div>
               <div className="flex justify-center items-center">
                    <div ref={el} className="third flex justify-center items-center font-graphik text-[2em] bg-indigo-400 mt-3 w-[5%]">c</div>
               </div>
          </main>
     </section>
}