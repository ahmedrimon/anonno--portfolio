import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react"
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Screen() {

     // let sections = gsap.querySelectorAll(".panel");

     // useEffect(() => {
     //      gsap.to(".panel", {
     //           xPercent: -100 * ((".panel").length - 1),
     //           ease: "none",
     //           scrollTrigger: {
     //                trigger: ".container",
     //                pin: true,
     //                scrub: 1,
     //                snap: 1 / ((".panel").length - 1),
     //                // base vertical scrolling on how wide the container is so it feels more natural.
     //                start: "top center",
     //                end: "+=4500",
     //                markers: true
     //           }
     //      });
     // }, [])

     // return 
     return <section className="h-[20%] p-[5%]">
          <h1>Hlw</h1>
     </section>
}