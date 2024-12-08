import Image from "next/image";
import subscribe from "@/app/assets/subscribe.png";


export default function Subscribe() {
  return (
    <div className="flex w-full h-[600px] bg-white mt-20 mb-10">
 
      <div>
        <Image src={subscribe} alt="subscribe" width={1920} height={462} className="w-[1920px] h-[462px]"/>
      </div>
      </div>
      )
}