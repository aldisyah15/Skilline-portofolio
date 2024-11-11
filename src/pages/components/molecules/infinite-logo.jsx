import Image_Logo_Client from "../atom/image_logo_client";

export default function Infinite_Logo_Slider() {
  return (
    <>
      <div className="relative top-[950px] md:top-[700px] mx-auto ">
        <div className="flex flex-col md:gap-5">
          <h1 className="text-[#696984] text-xl text-center">Trusted by 5,000+ Companies Worldwide</h1>
          <Image_Logo_Client />
        </div>
      </div>
    </>
  );
}
