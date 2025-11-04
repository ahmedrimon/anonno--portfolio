import Image from 'next/image';
import r from '../../images/r.webp';

export default function Design() {
     return <section className="text-white bg-[#0F1E34] h-[150vh] max-[767px]:h-[65vh] max-[520px]:h-[50vh]">
          <h1 className="font-antiga uppercase font-normal text-[12vw]">Design</h1>
          <div className="flex justify-center">
               <h1 className="font-cardinal font-normal text-[5vw] mt-[26rem] absolute z-10">Design with Excellence, Quality, Assurence and Visibility</h1>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="mt-[4rem]">
               <Image
                    // className="flex justify-center items-center"
                    src={r}
                    alt="Picture of the art"
                    width={933}
                    height={466}
                    priority
               />
          </div>
     </section>
}