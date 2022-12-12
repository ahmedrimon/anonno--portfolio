import Link from "next/link";

export default function Work() {
     return <section className="bg-[#f4efe9] h-[200vh]">
          <div className="pt-3 flex justify-end">
               <button className="bg-[#e6b375] text-black w-[7%] h-[2%] rounded-md font-bold">
                    <Link className="uppercase font-cardinal" href="/"> Back Home</Link>
               </button>
          </div>
          <h2 className="font-acma font-normal text-[29px] w-[30%]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like</h2>
     </section>
}