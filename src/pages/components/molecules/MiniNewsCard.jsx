import Image from "next/image";

export default function MiniNewsCard({SrcImage, AltImage, Title, Description}) {
  return (
    <>
      <div className=" flex">
        <div className="relative">
          <Image
            src={SrcImage}
            alt={AltImage}
            width={300}
            height={300}
            className="cursor-pointer"
          />
           <div className="bg-[#F4C467] w-24 flex justify-center items-center rounded-xl text-xs text-[#252641] absolute bottom-0 right-0 md:-translate-y-3 -translate-y-8">
            <h1>PRESS RELEASE</h1>
          </div>
        </div>
        <div className="pl-2 md:pl-5">
          <p className=" text-[#252641] text-xs md:text-sm cursor-pointer">
            {Title}
          </p>
          <p className=" text-[#696984] text-xs cursor-pointer pt-1 md:pt-3">
            {Description}
          </p>
        </div>
      </div>
    </>
  );
}
