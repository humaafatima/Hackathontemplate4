import Image from "next/image";
import delivery from "@/app/assets/delivery.png";
import cashback1 from "@/app/assets/cashback1.png";
import call243 from "@/app/assets/call243.png";
import call241 from "@/app/assets/call241.png";

export default function Service() {
  return (
    <div className="w-full bg-white mt-8 py-8">
    
      <div className="mb-8 text-center font-bold text-2xl md:text-3xl font-[Josefin Sans] text-[rgba(26,11,91,1)]">
        What Shopex Offer!
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 lg:px-20">
       
        <div className="flex flex-col items-center text-center">
          <Image src={delivery} alt="delivery" width={65} height={42} className="w-[65px] h-[42px]"/>
          <p className="mt-4 text-[rgba(26,11,91,1)] font-bold text-lg">24/7 Support</p>
          <p className="mt-2 text-gray-500 text-sm md:text-base">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
            <br />
            Massa purus gravida.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <Image
            src={cashback1} alt="cashback" width={65} height={42} className="w-[65px] h-[42px]"/>
          <p className="mt-4 text-[rgba(26,11,91,1)] font-bold text-lg">Secure Payments</p>
          <p className="mt-2 text-gray-500 text-sm md:text-base">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
            <br />
            Massa purus gravida.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <Image src={call243} alt="support" width={65} height={42} className="w-[65px] h-[42px]"/>
          <p className="mt-4 text-[rgba(26,11,91,1)] font-bold text-lg">Quality Assurance</p>
          <p className="mt-2 text-gray-500 text-sm md:text-base">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
            <br />
            Massa purus gravida.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <Image
            src={call241} alt="services" width={65} height={42} className="w-[65px] h-[42px]" />
          <p className="mt-4 text-[rgba(26,11,91,1)] font-bold text-lg">Fast Delivery</p>
          <p className="mt-2 text-gray-500 text-sm md:text-base">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
            <br />
            Massa purus gravida.
          </p>
        </div>
      </div>
    </div>
  );
}
