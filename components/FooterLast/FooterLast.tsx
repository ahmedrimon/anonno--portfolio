import Link from 'next/link'
export default function FooterLast() {
     return <section className="bg-[#D7D8DD] h-[5vh] flex justify-between p-4">
          <span className="font-graphik font-bold max-[521px]:text-[2vw]">© Anonno Studio. All Rights Reserved.</span>
          <Link className="font-graphik font-bold max-[521px]:text-[2vw]" href="https://www.linkedin.com/in/iftekhar--ahmed/" target="_blank">Developed By Iftekhar Ahmed</Link>
     </section>
}