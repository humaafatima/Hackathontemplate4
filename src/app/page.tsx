"use client"
import Navbar from "@/app/Components/Navbar"
import Whitenav from "@/app/Components/Whitenav"
import Hero from "@/app/Components/Hero"
import Featuredproducts from "@/app/Components/Featuredproducts"
import Latestproducts from "@/app/Components/Latestproducts"
import Service from "@/app/Components/Service"
import Bluesofa from "@/app/Components/Bluesofa"
import Trending from "@/app/Components/Trending"
import Discountitem from "@/app/Components/Discountitem"
import Topcategories from "@/app/Components/Topcategories"
import Subscribe from "@/app/Components/Subscribe"
import Blog from "@/app/Components/Blog"
import Footer from "@/app/Components/Footer"


export default function Home () {
  return <div className="h-screen w-screen bg-white">
    
<Navbar/>
<Whitenav/>
<Hero/>
<Featuredproducts/>
<Latestproducts/>
<Service/>
<Bluesofa/>
<Trending/>
<Discountitem/>
<Topcategories/>
<Subscribe/>
<Blog/>
<Footer/>
</div>
}