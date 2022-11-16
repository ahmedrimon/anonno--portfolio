import Image from 'next/image';
import r from '../../images/r.webp';

export default function Design() {
     return <section className="text-white bg-[#0F1E34] max-[1925px]:h-[100vh]">
          <h1 className="font-antiga uppercase font-normal text-[12vw]">Design</h1>
          <div className="flex justify-center">
               <h1 className="font-cardinal font-normal text-[5vw] mt-[8rem] absolute z-10">Design with Excellence, Quality, Assurence and Visibility</h1>
          </div>
          <div className="absolute z-0 mt-[6rem]">
               <Image
                    className="flex justify-center items-center"
                    src={r}
                    alt="Picture of the art"
                    width={933}
                    height={466}
                    priority={true}
               />
          </div>
     </section>
}