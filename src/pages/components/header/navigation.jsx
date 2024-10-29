import Image from "next/image";
import { useState } from "react";
import SearchBar from "../searchBar/searchBar";
import Link from "next/link";

export default function Navigation() {
  const [clickBoolean, setClickBoolean] = useState(false);
  const [searchClick, setSearchClick] = useState(false);

  const clickSearchBar = () => {
    setSearchClick(!searchClick);
  };

  const click = () => {
    setClickBoolean(!clickBoolean);
  };
  return (
    <>
      <header className="flex px-7 py-5 justify-between  fixed top-0 left-0 right-0 shadow-lg bg-gray-800">
        <div className="relative md:hidden">
          <Image
            src={clickBoolean ? "/image/close.svg" : "/image/menu.svg"}
            alt="menu"
            width={30}
            height={30}
            className="cursor-pointer"
            onClick={click}
          />
        </div>

        <div className="absolute">
        <nav className={`flex flex-col absolute left-0 md:left-[190px] ml-20 md:ml-0 text-black bg-gray-300 rounded-2xl justify-around md:flex-row md:w-0 md:h-0 md:text-white ${clickBoolean ? "w-[203px] h-[200px]" : " w-0 h-0 overflow-hidden md:overflow-visible"}`}>
            <Link href={"#"} className="ml-4 md:ml-0 text-nowrap">
              Ui Design 
            </Link>

            <Link href={"#"} className="ml-4  text-nowrap">
              Front End
            </Link>

            <Link href={"#"} className="ml-4  text-nowrap">
              Back End
            </Link>

            <Link href={"#"} className="ml-4  text-nowrap">
              Lainnya
            </Link>
          </nav>
        </div>
          
      

        <div className="text-white flex items-center md:justify-center  bg-red-600">
          {/* <Image src="/image/logo/logo.svg" alt="s" width={100} height={100}/> */}
          <div className="w-[30px] h-[30px] bg-gray-500 flex justify-center items-center mr-4">
            E
          </div>

          <div className="">Epictetus</div>

          {/* <SideBar isOpen={clickBoolean} /> */}
        </div>

        <div className="">
          <div>
            <Image
              src="/image/search.svg"
              alt=""
              width={30}
              height={30}
              onClick={clickSearchBar}
              className="cursor-pointer  md:hidden"
            />

            <SearchBar />

            {/* <SearchBar isOpen={true}/>    */}
          </div>
        </div>
        {/* <SideBar isOpen={clickBoolean} /> */}
      </header>
    </>
  );
}
