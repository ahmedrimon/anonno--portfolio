import Link from "next/link";

export default function Navbar() {

     return <section>
          <nav className="absolute rotate-90 font-montreal__medium text-md font-normal cursor-pointer max-[1925px]:absolute max-[1925px]:max-w-[1%] max-[1925px]:top-[5%] max-[1925px]:left-[96%] max-[767px]:absolute max-[767px]:max-w-[1%] max-[767px]:top-[5%] max-[767px]:left-[93%]">
               <Link className="text-[13px]" href="/work">WORK</Link>
               <Link className="text-[13px] ml-4" href="/about">ABOUT</Link>
          </nav>
     </section>
}

