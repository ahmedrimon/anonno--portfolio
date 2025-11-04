import Image from 'next/image'
import own from "../../images/anonnoPicture.jpg";

export default function About() {
     return <section className="bg-[#D7D8DD] h-[100vh]">
          <h1 className="font-antiga text-white text-[6vw] ml-[2em]">Get in Touch</h1>
          <h1 className="font-graphik text-[3vw] ml-[6em] hover:bg-[#aebee8] hover:cursor-pointer hover:w-[35%] max-[520px]:text-[1.5rem] max-[520px]:ml-[6rem] max-[520px]:mt-[1rem]">anonnoruddho@gmail.com</h1>
          <div className="flex justify-around">
               <p className="font-antiga text-black text-[3vw] uppercase w-[20%] mt-[5rem] ml-[5rem] max-[520px]:hidden">I'm here for just work above and beyond ideas</p>
               <Image
                    className="ml-16 rounded-md max-[520px]:mt-[4rem]"
                    src={own}
                    alt="owner of this website"
                    width={300}
                    height={100}
               />
          </div>
          <p className="font-acma text-black text-[1.5vw] w-[40%] mt-[8rem] ml-[32rem] max-[520px]:ml-[3rem] max-[520px]:text-[1.5rem]">I Work at least 2.5+ year almost, some work i done personally. I love making website which is more visually stunning</p>
     </section>
}