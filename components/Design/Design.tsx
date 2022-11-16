import Image from 'next/image';
import r from '../../images/r.webp';

export default function Design() {
     return <section className="text-white bg-[#0F1E34] h-screen">
          <h1 className="font-antiga uppercase font-normal text-[12vw]">Design</h1>
          <div className="flex justify-center mt-[10rem]">
               <div className="absolute top-[250%] left-[34%] z-2">
                    <Image
                         src={r}
                         alt="Picture of the art"
                         width={933}
                         height={466}
                    />
               </div>
               <h1 className="absolute font-cardinal font-normal text-[5vw]">Design with Excellence, Quality, Assurence and Visibility</h1>
          </div>
     </section>
}