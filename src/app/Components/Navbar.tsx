import Image from "next/image";
import down from "@/app/assets/down.png";
import email from "@/app/assets/email.png";
import call from "@/app/assets/call.png";
import cart from "@/app/assets/cart.png";
import login from "@/app/assets/login.png";
import heart from "@/app/assets/heart.png";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center w-full h-[44px] bg-[rgba(126,51,224,1)] text-white font-poppins">
       
        <ul className="flex space-x-6 items-center">
          <li className="flex items-center space-x-2">
            <Image src={email} alt="email" className="w-4 h-4" />
            <span>mhhasanul@gmail.com</span>
          </li>
          <li className="flex items-center space-x-2">
            <Image src={call} alt="call" className="w-4 h-4" />
            <span>(12345)67890</span>
          </li>
        </ul>

       
        <ul className="flex flex-wrap space-x-4 items-center">
          <li className="flex items-center space-x-1">
            <span>English</span>
            <Image src={down} alt="down arrow" className="w-4 h-4" />
          </li>
          <li className="flex items-center space-x-1">
            <span>USD</span>
            <Image src={down} alt="down arrow" className="w-4 h-4" />
          </li>
          <li className="hidden md:flex items-center space-x-1">
            <span>Login</span>
            <Image src={login} alt="login icon" className="w-4 h-4" />
          </li>
          <li className="flex items-center space-x-1">
            <span>Wishlist</span>
            <Image src={heart} alt="heart icon" className="w-4 h-4" />
          </li>
          <li>
            <Image src={cart} alt="cart icon" className="w-4 h-4" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
