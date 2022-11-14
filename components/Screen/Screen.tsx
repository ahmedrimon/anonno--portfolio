import prototype from '../../images/Ptototyping.webp';

export default function Screen() {

     return <section className="text-white bg-[#151515] h-screen">
          <div className="relative rotate-90 w-[5%] top-[45%] border-r-2">
               <h1 className="font-cardinal font-normal text-[2vw]">PROTOTYPING</h1>
          </div>
          <div>
               <img src={prototype} alt="" />
          </div>
     </section>

}