import Image from "next/image";
import red from "@/app/assets/red.png";
import t1 from "@/app/assets/t1.png";
import t2 from "@/app/assets/t2.png";
import t4 from "@/app/assets/t4.png";
import t5 from "@/app/assets/t5.png";
import t6 from "@/app/assets/t6.png";
import t7 from "@/app/assets/t7.png";
import t8 from "@/app/assets/t8.png";
import t9 from "@/app/assets/t9.png";

export default function TrendingProducts() {
  return (
    <div className="w-full bg-white mt-8 mb-12">
 
      <div className="mt-10 text-center font-bold text-2xl md:text-3xl font-[Josefin Sans] text-[rgba(26,11,91,1)]">
        Trending Products
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-6">
        <Image src={t1} alt="t1" width={270} height={350} className="w-[200px] md:w-[270px] h-auto" />
        <Image src={red} alt="red" width={270} height={350} className="w-[200px] md:w-[270px] h-auto" />
        <Image src={t2} alt="t2" width={270} height={350} className="w-[200px] md:w-[270px] h-auto" />
        <Image src={t4} alt="t4" width={270} height={350} className="w-[200px] md:w-[270px] h-auto" />
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 justify-items-center items-start">
        <Image src={t5} alt="Product 1" width={420} height={270} className="w-[300px] md:w-[420px] h-auto" />
        <Image src={t6} alt="Product 2" width={420} height={270} className="w-[300px] md:w-[420px] h-auto" />

       
        <div className="flex flex-col gap-4 justify-start">
          <Image src={t7} alt="Product 3" width={267} height={74} className="w-[180px] md:w-[267px] h-auto" />
          <Image src={t8} alt="Product 4" width={267} height={74} className="w-[180px] md:w-[267px] h-auto" />
          <Image src={t9} alt="Product 5" width={267} height={74} className="w-[180px] md:w-[267px] h-auto" />
        </div>
      </div>
    </div>
  );
}
