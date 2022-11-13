import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react"
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Screen() {

     let el = useRef();
     let q = gsap.utils.selector(el);

     useEffect(() => {
          gsap.to(q(".panel"), {
               xPercent: -100 * ((".panel").length - 1),
               ease: "none",
               scrollTrigger: {
                    trigger: ".container",
                    pin: true,
                    scrub: 1,
                    snap: 1 / ((".panel").length - 1),
                    // base vertical scrolling on how wide the container is so it feels more natural.
                    start: "77% center",
                    end: "+=3600",
                    // end: "110% bottom",
                    markers: true
               }
          });
     }, [])

     // return 
     return <section className="h-screen">
          <section ref={el} className="h-[100vh]">
               <div className="w-[600%] h-[100%] flex flex-nowrap overscroll-none">
                    <div className="description panel w-screen h-screen bg-blue-500">
                         <div><h1>Horizontal snapping sections (simple)</h1>
                              <p>Scroll vertically to scrub the horizontal animation. It also dynamically snaps to the sections in an organic way based on the velocity. The snapping occurs based on the natural ending position after momentum is applied, not a simplistic "wherever it is when the user stops".</p>
                              <div className="scroll-down">Scroll down<div className="arrow"></div></div>
                         </div>
                    </div>


                    <section className="panel w-screen h-screen bg-red-500">
                         ONE
                    </section>
                    <section className="panel w-screen h-screen bg-orange-500">
                         TWO
                    </section>
                    <section className="panel w-screen h-screen bg-purple-500">
                         THREE
                    </section>
                    <section className="panel w-screen h-screen bg-green-500">
                         FOUR
                    </section>
                    <section className="panel w-screen h-screen bg-gray-500">
                         FIVE
                    </section>

               </div>
          </section>
     </section>

}