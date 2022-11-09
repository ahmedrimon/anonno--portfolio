import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react"
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 2 })

export default function Screen() {

     const first = useRef();
     const tl = gsap.timeline()

     useEffect(() => {
          gsap.to(".firstBox", {
               scrollTrigger: {
                    trigger: ".firstBox",
                    toggleActions: "restart none none none",
                    start: "top center",
                    end: "top 100px",
                    scrub: true,
                    pin: true,
                    markers: true
               },
               x: 400,
               duration: 3,
               rotation: 360
          })

          tl.from(".orange", { xPercent: -100 })
               .from(".purple", { xPercent: 100 })
               .from(".green", { yPercent: -100 })
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
          {/* Starting Pin */}
          <section className="flex justify-center items-center h-screen border-2 border-black">
               <h1 className="font-graphik font-normal text-[10em] uppercase">Other two</h1>
          </section>
          <section className="flex justify-center items-center h-screen border-2 border-red-500">
               <h1 className="font-graphik font-normal text-[10em] uppercase">Other three</h1>
          </section>
          <section className="flex justify-center items-center h-screen border-2 border-yellow-500">
               <h1 className="font-graphik font-normal text-[10em] uppercase">Other four</h1>
          </section>
     </section>
}