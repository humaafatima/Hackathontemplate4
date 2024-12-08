import Image from "next/image";
import grey from "@/app/assets/grey.png";
import yellow from "@/app/assets/yellow.png";
import white from "@/app/assets/white.png";

export default function LatestProducts() {
  return (
    <div className="w-full bg-white mt-10">
    
      <div className="mt-10 text-center font-bold text-2xl md:text-3xl font-[Josefin Sans] text-[rgba(26,11,91,1)]">
        Latest Products
      </div>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-8 mt-6">
        <Image src={grey} alt="Product 1" width={270} height={236} className="w-full h-auto"/>
        <Image src={yellow} alt="Product 2" width={270} height={236} className="w-full h-auto"/>
        <Image src={white} alt="Product 3" width={270} height={236} className="w-full h-auto"/>
      </div>
    </div>
  );
}
