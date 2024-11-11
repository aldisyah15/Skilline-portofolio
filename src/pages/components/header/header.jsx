import Image from "next/image";
import { useEffect, useState } from "react";
// Header.js
export default function Header() {
  const [isMenu, setMenu] = useState(false)
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
  })
  console.info(scroll)

  const Menu = () => {
    setMenu(!isMenu)
  }
  
  return (
   <div className="">
    <div className={` z-50 top-6 left-3 transition-all duration-700 ease-in-out  ${scroll ? "fixed md:translate-y-0" : "fixed  md:translate-y-20 md:translate-x-16"}`}>
        <div className="relative">
        <Image src={"/image/logo.png"} alt="" width={50} height={50} />
          <Image
            src={"/image/Skilline.png"}
            alt=""
            width={90}
            height={90}
            className="relative -top-9 left-5"
          />
        </div>
      </div>

       <div className={`bg-[#fff3e4]  w-full overflow-hidden transition-all duration-700 ease-in-out fixed z-40 ${isMenu ? "h-screen" : "h-[95px]"}`}>
      {/* Logo */}
      

      {/* Toggle */}
      <div className="ml-5">
          <Image
            src={isMenu ? "/image/burger-menu-right.svg" : "/image/burger-menu-leftt.svg"}
            alt=""
            width={70}
            height={70}
            onClick={Menu}
            className="absolute right-0 top-0 cursor-pointer md:hidden"
          />
      </div>

      {/* Navigasi */}
      <div className="flex flex-col items-center md:flex-row  md:absolute md:right-0 md:top-0 md:mt-7 text-black">

        <div className="mt-32 md:mt-0">
          <ul className="grid gap-y-8 md:flex md:gap-x-8 ">
            <li>Home</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* Buttom Login and sign In */}
        <div className="grid gap-y-4 mt-8 md:ml-8 md:flex md:gap-x-4 md:mt-0 md:mr-4">
        <button className="w-[140px] h-[45px] bg-white rounded-full">Login</button>
        <button className="w-[140px] h-[45px] bg-yellow-500 rounded-full text-white">Sign up</button>
        </div>
      </div>

    </div>
   </div>
  )
}
