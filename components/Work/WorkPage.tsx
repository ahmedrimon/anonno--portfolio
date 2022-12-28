import Link from "next/link";
import Image from "next/image";
import icam from "../../images/Icam-four.png";

export default function Work() {
     return <section className="bg-[#f4efe9] h-[200vh]">
          <div className="pt-3 flex justify-end">
               <button className="bg-[#e6b375] text-black w-[7%] h-[2%] rounded-md font-bold">
                    <Link className="uppercase font-cardinal" href="/"> Back Home</Link>
               </button>
          </div>
          <h2 className="font-acma font-normal text-[8vw] w-[30%]">Experiment Project</h2>
          <Image
               className="rounded-full"
               src={icam}
               alt="red picture first"
               width={500}
               height={500}
               priority
          />
          <p className="text-[10vw] font-cardinal">Here is this that you work on</p>
     </section>
}