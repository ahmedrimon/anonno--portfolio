import Link from "next/link";
export default function Footer() {
     return <section className="bg-[#D7D8DD] h-screen flex justify-center items-center">
          <span className="font-graphik font-normal text-[7vw]">anonnoruddho@gmail.com</span>
          <button
               onClick={() => navigator.clipboard.writeText('anonnoruddho@gmail.com')}
               className="bg-orange-500 font-montreal__medium w-20 rounded-md"
          >
               Copy
          </button>
     </section>
}
