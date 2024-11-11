import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="w-full bg-[#252641] relative top-[2200px] md:top-[1700px] flex flex-col items-center text-[#B2B3CF]">
        <div className="flex items-center pt-10">
          <div className="">
            <Image
              src={"/image/logoFooter.png"}
              alt="newsPhoto1"
              width={150}
              height={150}
              className="cursor-pointer border-r-[1px] border-[#626381] pr-5"
            />
          </div>
          <div className="text-white font-bold pl-5">
            <h1>
              Virtual Class <br /> for Zoom
            </h1>
          </div>
        </div>

        <div className="pt-10">
          <h1>Subscribe to get our Newsletter</h1>
        </div>

        <div className="mt-3 flex flex-col md:flex-row items-center">
          <input
            type="text"
            placeholder="Your Email"
            className="w-72 text-[#83839A] bg-[#252641] border border-[#83839A] py-2 pl-5 rounded-full outline-none placeholder:text-xs"
          />
          <button className="w-[140px] h-[45px] bg-gradient-to-l from-[#545AE7] to-[#393FCF] rounded-full text-white ml-3 mt-4 md:mt-0">
            Subscribe
          </button>
        </div>

        <div className="text-xs flex mt-5">
            <p className="border-r-[1px] border-[#83839A] pr-3">Careers</p>
            <p className="border-r-[1px] border-[#83839A] pl-3 pr-3">Privacy Policy</p>
            <p className="pl-3">Terms & Conditions</p>
        </div>
        <div className="text-xs mt-3">
        © 2021 Class Technologies Inc. 
        </div>
      </div>
    </>
  );
}
