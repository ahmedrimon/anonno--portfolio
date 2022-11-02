// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
import Link from "next/link";

export default function Navbar() {

     // const navbar = useRef();

     // useLayoutEffect(() => {

     //      const ctx = gsap.context(() => {
     //           gsap.to(".nav", { rotation: "+=360" });
     //      }, navbar)

     //      return () => ctx.revert()
     // }, [])

     return <section>
          <nav className="absolute rotate-90 font-montreal__medium text-md font-normal cursor-pointer max-[420px]:top-[10%] max-[420px]:left-[77%]">
               <Link href="/work">WORK</Link>
               <Link href="/about" className="ml-4">ABOUT</Link>
          </nav>
     </section>
}

// absolute top-[10%] left-[93%] rotate-90