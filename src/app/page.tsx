import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-[#9A3B3B] via-[#C08261] to-[#9A3B3B] animate-gradient-x flex justify-center items-center h-screen">
    <div className="text-center px-4">
        <h1 className="text-[#F2ECBE] font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl">LINKLISTCIRCLE</h1>
        <h2 className="text-[#F2ECBE] font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 sm:mt-3 md:mt-4">A BLOCKCHAIN COMPANY</h2>
        <h1 className="text-[#F2ECBE]  text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl mt-2 sm:mt-3 md:mt-4 tracking-widest hover:text-[#9A3B3B] hover:shadow-2xl hover:bg-[#F2ECBE] hover:cursor-alias transition hover:-translate-y-1 duration-1000 hover:shadow-[#E2C799] hover:rotate-3 hover:scale-105 tracking-widest  hover:animate-pulse px-8">COMING SOON</h1>
    </div>
    </main>
  );
}
