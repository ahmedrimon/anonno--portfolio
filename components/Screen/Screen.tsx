'use client';
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react"
import { gsap } from "gsap";

// if (typeof window !== "undefined") {
//      gsap.registerPlugin(ScrollTrigger);
// }

export default function Screen() {

     const first = useRef();

     useLayoutEffect(() => {
          let ctx = gsap.context(() => {
               gsap.to(".box", { rotation: "+=360" });
          }, first);

          return () => ctx.revert();
     }, []);

     return <section>
          <h1 className="font-antiga font-normal text-[10vw] ml-[5em]">Work Inside</h1>
          <main className="mb-[5%]">
               <div className="flex justify-center items-center">
                    <div ref={first} className="box first flex justify-center items-center font-graphik text-[2em] bg-indigo-400 bg-contain w-[5%]">a</div>
               </div>
               <div className="flex justify-center items-center">
                    <div className="second flex justify-center items-center font-graphik text-[2em] bg-indigo-400 mt-3 w-[5%]">b</div>
               </div>
               <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center font-graphik text-[2em] bg-indigo-400 mt-3 w-[5%]">c</div>
               </div>
          </main>
     </section>
}