import Image from "next/image";

export default function AboutCard({ SrcImage, Title, ButtonText }) {
  return (
    <div className="relative inline-block w-[300px] md:w-[400px]">
      {/* Overlay harus berada di atas gambar */}
      <Image
        src={SrcImage}
        alt="PeopleCard-1"
        width={400}
        height={400}
        className="rounded-xl"
      />

      <div className="absolute inset-0 bg-black opacity-50 hover:opacity-0 rounded-xl transition-opacity duration-300"></div>

      <div className="absolute top-1/3 md:left-28 left-20 ">
        <h1 className="text-white">{Title}</h1>
        <button className="mt-2 w-[150px] h-[45px] bg-transparent rounded-full border border-white text-xs text-white">
          {ButtonText}
        </button>
      </div>
    </div>
  );
}


