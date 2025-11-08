import Link from "next/link";
import Image from "next/image";
import icam from "../../images/Icam-four.png";
import explore from "../../images/React-Explore.png";
import portfolio from "../../images/Portfolio.png";
import FooterLast from "../FooterLast/FooterLast";

export default function Work() {
     return <section className="bg-[#f4efe9] h-[255vh] w-full sm:h-[271vh] md:h-[244vh] xl:h-[200vh]">
          <div className="pt-3 ml-4">
               <button className="w-[16%] rounded-md">
                    <Link className="" href="/">&larr;</Link>
               </button>
          </div>
          <h2 className="font-acma font-normal text-[8vw] w-[30%] ml-6 mt-4">Experiment Project</h2>
          <p className="font-antiga text-[4em] ml-[0.4em]">01</p>
          <div className="min-[767px]:flex">
               <Image
                    className="rounded-full ml-[2em]"
                    src={icam}
                    alt="red picture first"
                    width={200}
                    height={200}
                    priority
               />
               <Link className="font-antiga text-[3em] text-red-500 ml-[1.5em] max-[767px]:text-[2em]" href="https://icam-distribution.netlify.app" target="__blank">LIVE LINK</Link>
               <Link className="font-antiga text-[3em] text-red-500 ml-[2em] max-[767px]:text-[2em]" href="https://github.com/ahmedrimon/icam-distribution" target="__blank">RAW CODE</Link>
               <div className="flex justify-center">
                    <p className="font-graphik font-normal text-[1em] mt-[1em] w-[70%]">To simple Ecommerce portray, and follow through the ideas are moving</p>
               </div>
          </div>
          <p className="font-antiga text-[4em] ml-[0.4em]">02</p>
          <div className="min-[767px]:flex">
               <Image
                    className="rounded-full ml-[2em]"
                    src={explore}
                    alt="red picture first"
                    width={200}
                    height={200}
                    priority
               />
               <Link className="font-antiga text-[3em] text-red-500 ml-[1.5em] max-[767px]:text-[2em]" href="https://react-explore.netlify.app/" target="__blank">LIVE LINK</Link>
               <Link className="font-antiga text-[3em] text-red-500 ml-[2em] max-[767px]:text-[2em]" href="https://github.com/ahmedrimon/react__explore" target="__blank">RAW CODE</Link>
               <div className="flex justify-center">
                    <p className="font-graphik font-normal text-[1em] mt-[1em] w-[70%]">React explore to do different things</p>
               </div>
          </div>
          <p className="font-antiga text-[4em] ml-[0.4em]">03</p>
          <div className="min-[767px]:flex">
               <Image
                    className="rounded-full ml-[2em]"
                    src={portfolio}
                    alt="red picture first"
                    width={200}
                    height={200}
                    priority
               />
               <Link className="font-antiga text-[3em] text-red-500 ml-[1.5em] max-[767px]:text-[2em]" href="https://iftekhar-portfolio.netlify.app/" target="__blank">LIVE LINK</Link>
               <Link className="font-antiga text-[3em] text-red-500 ml-[2em] max-[767px]:text-[2em]" href="https://github.com/ahmedrimon/anonno--portfolio" target="__blank">RAW CODE</Link>
               <div className="flex justify-center">
                    <p className="font-graphik font-normal text-[1em] mt-[1em] w-[70%]">Progress that happen, just continue the thing and establish idea</p>
               </div>
          </div>
          <div className="mt-[6em] md:m max-[520px]:mt-[1.5em]">
               <FooterLast />
          </div>
     </section>
}