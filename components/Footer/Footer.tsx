import Link from "next/link";
export default function Footer() {
     return <section className="bg-[#D7D8DD] h-[50vh] flex justify-center items-center">
          <div className="p-5">
               <div className="sm:p-6">
                    <span className="font-graphik font-normal text-[7vw] sm:text-[5vw]">anonnoruddho@gmail.com</span>
               </div>
               <button
                    onClick={() => navigator.clipboard.writeText('anonnoruddho@gmail.com')}
                    className="bg-orange-500 font-montreal__medium w-20 rounded-md"
               >
                    Copy
               </button>
          </div>
     </section>
}
