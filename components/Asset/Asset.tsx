import Image from 'next/image';
import first from "../../images/first.jpg";
import second from "../../images/second.jpg";
import three from "../../images/three.jpg";

export default function Asset() {
     return <section className="h-[290vh] sm:h-[256vh] lg:h-[200vh] bg-[#DCFE4A]">
          <h1 className="font-antiga font-normal text-[11vw] ml-5">ASSET BUILDING</h1>
          <main className="flex justify-start ml-2 mr-2 mt-5 max-[767px]:block">
               <div className="border-2 border-orange-500 rounded-full ml-4 p-2 w-[10%] flex justify-center max-[767px]:w-[70%] max-[767px]:mx-auto">
                    <p className="font-graphik font-bold text-[1rem]">WebP</p>
               </div>
               <div className="border-2 border-orange-500 rounded-full ml-4 p-2 w-[10%] flex justify-center max-[767px]:w-[70%] max-[767px]:mt-5 max-[767px]:mx-auto">
                    <p className="font-graphik font-bold text-[1rem]">Woff</p>
               </div>
               <div className="border-2 border-orange-500 rounded-full ml-4 p-2 w-[10%] flex justify-center max-[767px]:w-[70%] max-[767px]:mt-5 max-[767px]:mx-auto">
                    <p className="font-graphik font-bold text-[1rem]">Png</p>
               </div>
               <div className="border-2 border-orange-500 rounded-full ml-4 p-2 w-[10%] flex justify-center max-[767px]:w-[70%] max-[767px]:mt-5 max-[767px]:mx-auto">
                    <p className="font-graphik font-bold text-[1rem]">Vimeo</p>
               </div>
               <div className="border-2 border-orange-500 rounded-full ml-4 p-2 w-[10%] flex justify-center max-[767px]:w-[70%] max-[767px]:mt-5 max-[767px]:mx-auto">
                    <p className="font-graphik font-bold text-[1rem]">Wordpress</p>
               </div>
               <div className="border-2 border-orange-500 rounded-full ml-4 p-2 w-[10%] flex justify-center max-[767px]:w-[70%] max-[767px]:mt-5 max-[767px]:mx-auto">
                    <p className="font-graphik font-bold text-[1rem]">Figma</p>
               </div>
               <div className="border-2 border-orange-500 rounded-full ml-4 p-2 w-[10%] flex justify-center max-[767px]:w-[70%] max-[767px]:mt-5 max-[767px]:mx-auto">
                    <p className="font-graphik font-bold text-[1rem]">Html</p>
               </div>
               <div className="border-2 border-orange-500 rounded-full ml-4 p-2 w-[10%] flex justify-center max-[767px]:w-[70%] max-[767px]:mt-5 max-[767px]:mx-auto">
                    <p className="font-graphik font-bold text-[1rem]">Css</p>
               </div>
               <div className="border-2 border-orange-500 rounded-full ml-4 p-2 w-[10%] flex justify-center max-[767px]:w-[70%] max-[767px]:mt-5 max-[767px]:mx-auto">
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
          <div className="absolute top-[560%] ml-6 mt-6 max-[767px]:hidden">
               <Image
                    className="rounded-full"
                    src={first}
                    alt="red picture first"
                    width={150}
                    height={200}
                    priority
               />
          </div>
          <div className="absolute top-[510%] lg:top-[540%] left-[87%] ml-6 mr-5 mt-6 max-[767px]:hidden">
               <Image
                    className="rounded-full"
                    src={three}
                    alt="red picture first"
                    width={250}
                    height={200}
                    priority
               />
          </div>
     </section>
}