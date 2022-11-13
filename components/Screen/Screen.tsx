import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react"
import { gsap } from "gsap";


export default function Screen() {
     gsap.registerPlugin(ScrollTrigger);

     // let el = useRef();
     // let q = gsap.utils.selector(el);

     const components = document.querySelectorAll(".panel")
     const container: HTMLElement | null = document.querySelector("#container")

     useEffect(() => {
          gsap.to(components, {
               xPercent: -100 * (components.length - 1),
               ease: "none",
               scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: 1,
                    // snap: 1 / (components.length - 1),
                    end: () => "+=" + container?.offsetWidth
               }
          });
     }, [])

     // return 
     return <section id="container" className="flex flex-nowrap w-[600%] h-[100%]">
          <section className="panel w-screen h-[100%] bg-red-500">
               ONE
          </section>
          <section className="panel w-screen h-[100%] bg-orange-500">
               TWO
          </section>
          <section className="panel w-screen h-[100%] bg-purple-500">
               THREE
          </section>
          <section className="panel w-screen h-[100%] bg-green-500">
               FOUR
          </section>
          <section className="panel w-screen h-[100%] bg-gray-500">
               FIVE
          </section>
     </section>

}