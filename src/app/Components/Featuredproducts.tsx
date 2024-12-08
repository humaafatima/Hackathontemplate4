import Image from "next/image";
import white from "@/app/assets/white.png";
import group152 from "@/app/assets/group152.png";
import f3 from "@/app/assets/f3.png";
import f4 from "@/app/assets/f4.png";
import l4 from "@/app/assets/l4.png";
import l5 from "@/app/assets/l5.png";

export default function FeaturedProducts() {
  return (
    <div className="w-full bg-white">
      <div className="mt-10 mb-6 text-center font-bold text-2xl md:text-3xl font-[Josefin Sans] text-[rgba(26,11,91,1)]">
        Featured Products
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8">
        <Image
          src={white} alt="Product 1" width={270} height={236} className="w-full h-auto"/>
        <Image src={group152} alt="Product 2" width={270} height={236} className="w-full h-auto"/>
        <Image src={f3} alt="Product 3" width={270} height={236} className="w-full h-auto"/>
        <Image src={f4} alt="Product 4" width={270} height={236} className="w-full h-auto"/>
        <Image src={l4} alt="Product 5" width={270} height={236} className="w-full h-auto"/>
        <Image src={l5} alt="Product 6" width={270} height={236} className="w-full h-auto"/>
        <Image src={f4} alt="Product 7" width={270} height={230} className="w-[270px] h-[230px]"/>
      </div>
    </div>
  );
}
