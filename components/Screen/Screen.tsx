import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react"
import { gsap } from "gsap";


export default function Screen() {
     gsap.registerPlugin(ScrollTrigger);

     // let el = useRef();
     // let q = gsap.utils.selector(el);

     let sections = gsap.utils.toArray(".panel");

     // useEffect(() => {
     //      gsap.to(components, {
     //           xPercent: -100 * (components.length - 1),
     //           ease: "none",
     //           scrollTrigger: {
     //                trigger: container,
     //                pin: true,
     //                scrub: 1,
     //                // snap: 1 / (components.length - 1),
     //                end: () => "+=" + container?.offsetWidth
     //           }
     //      });
     // }, [])

     useEffect(() => {
          gsap.to(sections, {
               xPercent: -100 * (sections.length - 1),
               ease: "none",
               scrollTrigger: {
                    trigger: "#container",
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    // base vertical scrolling on how wide the container is so it feels more natural.
                    end: "+=3500",
               }
          });
     }, [])

     // return 
     return <section id="container" className="flex flex-nowrap w-[600%] h-[100%]">
          <section className="panel h-[100%] bg-red-500">
               ONE
          </section>
          <section className="panel bg-orange-500">
               TWO
          </section>
          <section className="panel bg-purple-500">
               THREE
          </section>
          <section className="panel bg-green-500">
               FOUR
          </section>
          <section className="panel bg-gray-500">
               FIVE
          </section>
     </section>

}