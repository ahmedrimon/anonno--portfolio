import Image from 'next/image'
import Link from 'next/link';

export default function About() {
     return <div>
               <div className="ml-4">
                    <button className="w-[16%] rounded-md">
                         <Link className="" href="/">&larr;</Link>
                    </button>
               </div>
          <section className="h-[100vh] w-full md:h-[h-80vh]">
               <h1 className="font-antiga text-[6vw] pt-[2em] ml-3 md:ml-5">Get in Touch</h1>
               <h1 className="font-graphik hover:bg-[#aebee8] hover:cursor-pointer hover:w-[35%] max-[520px]:ml-[6rem] max-[520px]:mt-[1rem] md:ml-4">anonnoruddho@gmail.com</h1>
               <div className="flex justify-around">
                    <p className="font-antiga text-black text-[3vw] uppercase w-[20%] mt-[5rem] ml-[5rem] max-[520px]:hidden">I'm here for just work above and beyond ideas</p>
                    <Image
                         className="ml-16 rounded-md max-[520px]:mt-[4rem]"
                         src="/anonnoPicture.jpg"
                         alt="owner of this website"
                         width={200}
                         height={200}
                    />
               </div>
               <p className="font-acma text-black text-[1.5vw] w-[50%] mt-[8rem] max-[520px]:ml-[3rem] md:ml-6 text-lg">I Work at least 2.5+ year almost, some work i done personally. I love making website which is more visually stunning</p>
          </section>
     </div>
}