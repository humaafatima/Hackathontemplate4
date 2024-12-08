import Image from "next/image"
import bar from "@/app/assets/bar.png"
import lb1 from "@/app/assets/lb1.png"
import lb2 from "@/app/assets/lb2.png"
import lbb1 from "@/app/assets/lbb1.png"

export default function LatestProducts() {
  return (
    <div className="w-full h-[600] mt-2 bg-white">
  
    <div className="flex flex-row justify-center items-center">
       <Image src={bar} alt="bar" width={904} height={93} className="w-full max-w-[904px] h-auto"/>
        </div>

        <div className="text-center font-bold text-3xl font-Josefin Sans mt-10 text-[rgba(26,11,91,1)]">
        Latest Blog
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 mt-8">
        <Image src={lb1} alt="lb2" width={370} height={493} className="w-full max-w-[370px] h-auto mx-auto"/>
        <Image src={lb2} alt="lbb1" width={370} height={493} className="w-full max-w-[370px] h-auto mx-auto"/>
        <Image src={lbb1} alt="lbb1" width={370} height={493} className="w-full max-w-[370px] h-auto mx-auto"/>
        
      </div>
    </div>
  );
}