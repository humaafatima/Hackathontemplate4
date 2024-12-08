import Image from "next/image";
import bluesofa from "@/app/assets/bluesofa.png";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center w-full h-auto md:h-[579px] bg-[rgba(241,240,255,1)] mt-12 px-6 md:px-8 py-8">
 
      <div className="flex justify-center md:justify-start w-full md:w-1/2">
        <Image src={bluesofa} alt="bluesofa" width={558} height={550} className="w-[300px] h-auto md:w-[558px] md:h-[550px]"/>
      </div>

     
      <div className="flex flex-col justify-center w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
        <h1 className="font-Josephin text-2xl md:text-4xl font-medium text-[rgba(26,11,91,1)]">
          Unique Features Of Latest & Trending Products
        </h1>
        <ul className="font-satoshi text-lg text-[rgba(138,143,185,1)] space-y-2">
          <li>
            All frames constructed with hardwood solids and laminates
          </li>
          <li>
            Reinforced with double wood dowels, glue, screw-nails, corner blocks, and machine nails
          </li>
          <li>
            Arms, backs, and seats are structurally reinforced
          </li>
        </ul>

        <div className="flex justify-center md:justify-start">
        <button
          onClick={() => alert("Button clicked!")}
          className="w-[157px] h-[45px] font-poppins border border-transparent text-white bg-[rgba(251,46,134,1)] rounded-md shadow hover:bg-[rgba(220,20,90,1)]">
            Add To Cart
        </button>
      </div>
    </div>
    </div>
  );
}
