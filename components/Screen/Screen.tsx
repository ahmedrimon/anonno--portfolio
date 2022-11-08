import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react"
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Screen() {

     const first = useRef();

     useEffect(() => {
          gsap.to(".firstBox", {
               scrollTrigger: {
                    trigger: ".firstBox",
                    toggleActions: "restart pause none none",
               },
               x: 400,
               duration: 3
          })
     }, [])

     return <section>
          <h1 className="font-antiga font-normal text-[10vw] ml-[5em]">Work Inside</h1>
          <main className="mb-[5%]">
               <div className="firstBox flex justify-center items-center">
                    <div ref={first} className="flex justify-center items-center font-graphik text-[2em] bg-indigo-400 bg-contain w-[5%]">a</div>
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