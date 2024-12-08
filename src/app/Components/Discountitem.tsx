import Image from "next/image";
import tortuga from "@/app/assets/tortuga.png";

export default function Discountitem() {
  return (
    <div className="w-full h-1200 bg-white mt-50">
     
      <div className="flex justify-center items-center w-full h-[180px]">
        <h1 className="text-[rgba(26,11,91,1)] font-bold text-4xl text-center">
          Discount Item
        </h1>
      </div>

    
      <div className="flex flex-row justify-center items-start gap-12 w-full">
     
        <div className="flex flex-col w-1/2 mt-18 gap-6">
          <h1 className="font-JosephinSans ml-20 text-4xl font-bold text-[rgba(26,11,91,1)]">
            20% Discount On All Products
          </h1>
          <p className="text-[rgba(251,46,134,1)] ml-20 font-bold">Eames Sofa Compact</p>
          <p className="font-Lato text-[rgba(183,186,203,1)] ml-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
          </p>
          <ul className="font-satoshi text-xl text-[rgba(183,186,203,1)] list-disc ml-20 pl-6">
            <li>All frames constructed with hardwood solids and laminates</li>
            <li>Reinforced with double wood dowels, glue, screw-nails corner blocks, and machine nails</li>
            <li>Arms, backs, and seats are structurally reinforced</li>
          </ul>
          <div className="ml-20">
          <button
            onClick={() => alert("Button clicked!")}
            className="w-[157px] h-[45px] mt-4 text-white font-Lato bg-[rgba(251,46,134,1)]">
            Shop Now
          </button>
        </div>

       </div>
        <div className="w-1/2 flex mt-0.225 justify-center">
          <Image src={tortuga} alt="tortuga" width={699} height={600} className="w-[699px] h-[600px]"/>
        </div>
      </div>
    </div>
  );
}
