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
          <nav className="absolute rotate-90 font-montreal__medium text-md font-normal cursor-pointer max-[1925px]:absolute max-[1925px]:max-w-[1%] max-[1925px]:top-[5%] max-[1925px]:left-[96%] , max-[767px]:absolute max-[767px]:max-w-[1%] max-[767px]:top-[5%] max-[767px]:left-[93%]">
               <Link href="/work">WORK</Link>
               <Link href="/about" className="ml-4">ABOUT</Link>
          </nav>
     </section>
}

// absolute top-[10%] left-[93%] rotate-90 max-[420px]:top-[10%] max-[420px]:left-[77%]