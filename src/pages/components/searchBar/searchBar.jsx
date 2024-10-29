import Image from "next/image";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState();

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${query}`);
  };

  return (
    <>
    <div className="hidden md:block">
    <div className="flex items-center absolute right-0 bottom-4 mr-5">
        <form onSubmit={handleSearch} className="">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Search..."
            className={"w-[200px] h-[35px] md:top-0 py-3 pl-10 focus:outline-none rounded-2xl bg-gray-500 placeholder:text-gray-200 text-gray-200 placeholder:text-sm"
            }
          />
        </form>
      <div className="absolute pl-2">
      <Image
          src="/image/search.svg"
          alt="d"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
      </div>
    </div>
     
    </>
  );
}
