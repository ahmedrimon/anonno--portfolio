import Image from 'next/image';
// import r from '../../images/r.webp';

export default function Design() {
     return <section className="text-white bg-[#0F1E34] sm:h-[100vh] lg:h-[165vh] h-[80vh]">
          <h1 className="font-antiga uppercase font-normal text-[12vw]">Design</h1>
          <div className="flex justify-center">
               <h1 className="font-cardinal font-normal sm:mt-[20rem] text-[5vw] mt-[15rem] absolute z-10">Design with Excellence, Quality, Assurence and Visibility</h1>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="mt-[4rem]">
               <Image
                    // className="flex justify-center items-center"
                    src="/r.webp"
                    alt="Picture of the art"
                    width={933}
                    height={466}
                    priority
               />
          </div>
     </section>
}