import Link from "next/link";
import Image from "next/image";
import icam from "../../images/Icam-four.png";
import FooterLast from "../FooterLast/FooterLast";

export default function Work() {
     return <section className="bg-[#f4efe9] h-[195vh]">
          <div className="pt-3 flex justify-end">
               <button className="bg-[#e6b375] text-black w-[7%] h-[2%] rounded-md font-bold">
                    <Link className="uppercase font-cardinal" href="/"> Back Home</Link>
               </button>
          </div>
          <h2 className="font-acma font-normal text-[8vw] w-[30%]">Experiment Project</h2>
          <div className="flex">
               <Image
                    className="rounded-full ml-[2em]"
                    src={icam}
                    alt="red picture first"
                    width={500}
                    height={500}
                    priority
               />
               <Link className="font-antiga text-[3vw] text-red-500 ml-[2em]" href="https://icam-distribution.netlify.app" target="__blank">LIVE LINK</Link>
               <Link className="font-antiga text-[3vw] text-red-500 mt-[2em]" href="https://github.com/ahmedrimon/icam-distribution" target="__blank">RAW CODE</Link>
               <p className="font-graphik font-normal text-[1vw]">To simple Ecommerce portray, and follow through the ideas are moving</p>
          </div>
          <div className="flex mt-[3em]">
               <Image
                    className="rounded-full ml-[2em]"
                    src={icam}
                    alt="red picture first"
                    width={500}
                    height={500}
                    priority
               />
               <Link className="font-antiga text-[3vw] text-red-500 ml-[2em]" href="https://icam-distribution.netlify.app" target="__blank">LIVE LINK</Link>
               <Link className="font-antiga text-[3vw] text-red-500 mt-[2em]" href="https://github.com/ahmedrimon/icam-distribution" target="__blank">RAW CODE</Link>
               <p className="font-graphik font-normal text-[1vw]">To simple Ecommerce portray</p>
          </div>
          <div className="flex mt-[3em]">
               <Image
                    className="rounded-full ml-[2em]"
                    src={icam}
                    alt="red picture first"
                    width={500}
                    height={500}
                    priority
               />
               <Link className="font-antiga text-[3vw] text-red-500 ml-[2em]" href="https://icam-distribution.netlify.app" target="__blank">LIVE LINK</Link>
               <Link className="font-antiga text-[3vw] text-red-500 mt-[2em]" href="https://github.com/ahmedrimon/icam-distribution" target="__blank">RAW CODE</Link>
               <p className="font-graphik font-normal text-[1vw]">To simple Ecommerce portray</p>
          </div>
          <div className="mt-[10.5em]">
               <FooterLast />
          </div>
     </section>
}