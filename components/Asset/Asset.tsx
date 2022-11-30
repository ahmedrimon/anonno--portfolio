import Image from 'next/image';
import first from "../../images/first.jpg";
import second from "../../images/second.jpg";
import three from "../../images/three.jpg";

export default function Asset() {
     return <section className="h-[160vh] bg-[#DCFE4A]">
          <h1 className="font-antiga font-normal text-[12vw]">ASSET BUILDING</h1>
          <main className="flex justify-start ml-4">
               <div className="border-2 border-orange-500 rounded-full p-2 w-[10%] flex justify-center">
                    <p className="font-graphik font-bold text-[1rem]">WebP</p>
               </div>
               <div className="border-2 border-orange-500 rounded-full ml-4 p-2 w-[10%] flex justify-center">
                    <p className="font-graphik font-bold text-[1rem]">Woff</p>
               </div>
               <div className="border-2 border-orange-500 rounded-full ml-4 p-2 w-[10%] flex justify-center">
                    <p className="font-graphik font-bold text-[1rem]">Png</p>
               </div>
               <div className="border-2 border-orange-500 rounded-full ml-4 p-2 w-[10%] flex justify-center">
                    <p className="font-graphik font-bold text-[1rem]">Vimeo</p>
               </div>
               <div className="border-2 border-orange-500 rounded-full ml-4 p-2 w-[10%] flex justify-center">
                    <p className="font-graphik font-bold text-[1rem]">Wordpress</p>
               </div>
               <div className="border-2 border-orange-500 rounded-full ml-4 p-2 w-[10%] flex justify-center">
                    <p className="font-graphik font-bold text-[1rem]">Figma</p>
               </div>
               <div className="border-2 border-orange-500 rounded-full ml-4 p-2 w-[10%] flex justify-center">
                    <p className="font-graphik font-bold text-[1rem]">Html</p>
               </div>
               <div className="border-2 border-orange-500 rounded-full ml-4 p-2 w-[10%] flex justify-center">
                    <p className="font-graphik font-bold text-[1rem]">Css</p>
               </div>
               <div className="border-2 border-orange-500 rounded-full ml-4 p-2 w-[10%] flex justify-center">
                    <p className="font-graphik font-bold text-[1rem]">Javascript</p>
               </div>
          </main>
          <main className="flex justify-center items-center">
               <div className="font-antiga font-normal text-[8em]">FOCUS</div>
          </main>
          <main className="flex justify-center items-center">
               <div className="font-antiga font-normal text-[8em]">ON</div>
          </main>
          <main className="flex justify-center items-center">
               <div className="font-antiga font-normal text-[8em]">NEW</div>
          </main>
          <main className="flex justify-center items-center">
               <div className="font-antiga font-normal text-[8em]">THING</div>
          </main>
          <div className="absolute top-[370%] ml-6 mt-6">
               <Image
                    className="rounded-full"
                    src={first}
                    alt="red picture first"
                    width={200}
                    height={200}
                    priority
               />
          </div>
          {/* <div className="absolute top-[380%] left-[43%] ml-6 mt-6 z-1">
               <Image
                    className="rounded-full"
                    src={second}
                    alt="red picture first"
                    width={200}
                    height={200}
                    priority
               />
          </div> */}
          <div className="absolute top-[390%] left-[87%] ml-6 mt-6">
               <Image
                    className="rounded-full"
                    src={three}
                    alt="red picture first"
                    width={200}
                    height={200}
                    priority
               />
          </div>
     </section>
}