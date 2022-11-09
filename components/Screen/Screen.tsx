import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react"
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Screen() {


     return <section>
          <h1 className="font-antiga font-normal text-[10vw] ml-[5em]">Work Inside</h1>

     </section>
}