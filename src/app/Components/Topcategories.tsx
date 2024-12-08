import Image from "next/image"
import tc1 from "@/app/assets/tc1.png"
import white from "@/app/assets/white.png"
import tc3 from "@/app/assets/tc3.png"
import tc4 from "@/app/assets/tc4.png"

export default function Trendingproducts() {
    return (
      <div className="w-full h-[400] mt-8 mb-30 bg-white">
        <div className="mt-10 text-center font-bold text-3xl font-Josefin Sans text-[rgba(26,11,91,1)]">
          Trending Products
        </div>
 
        <div className="flex justify-center gap-6 mb-20 items-center">
         
          <Image
            src={tc1} alt="tc1" width={269} height={345} className="w-[269px] h-[345px]"/>
          <Image src={white} alt="white" width={269} height={345} className="w-[269px] h-[345px]"/>
            <Image src={tc3} alt="tc3" width={269} height={345} className="w-[269px] h-[345px]"/>
           <Image src={tc4} alt="tc4" width={269} height={345} className="w-[269px] h-[345px]"/>
        </div>
        </div>
        )
        }