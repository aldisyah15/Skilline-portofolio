import Image from "next/image";

export default function NewsCard() {
  return (
    <>
      <div className="">
        <div>
          <Image
            src={"/image/newsPhoto1.png"}
            alt="newsPhoto1"
            width={540}
            height={400}
            className="cursor-pointer"
          />
        </div>
        <div className="mt-5 text-sm">
          <div className="bg-[#F4C467] w-20 flex justify-center items-center rounded-xl text-sm text-[#252641]">
            <h1>NEWS</h1>
          </div>

          <p className="pt-3 text-[#252641] text-xl cursor-pointer">
            Class adds $30 million to its balance sheet for a Zoom-friendly
            edtech solution
          </p>
          <p className="pt-3 text-[#696984] text-xs cursor-pointer">
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively...
          </p>

          <h1 className="pt-3 underline text-[#696984] text-xs cursor-pointer">
            Read more
          </h1>
        </div>
      </div>
    </>
  );
}
