import Image from "next/image";

export default function HeaderContent() {
  return (
    <>
      <div className="flex flex-col items-center md:flex-row md:justify-between bg-[#fff3e4] rounded-b-[200px] h-[800px] md:h-[620px] w-full absolute mt-[70px] md:mt-0 pt-10 md:pt-28 ">
        <div className="md:ml-20">
          <h1 className=" text-4xl text-blue-900 leading-tight text-center md:text-left">
            <span className="text-orange-400 text-4xl font-extrabold">
              Studying{" "}
            </span>
            <span className="font-extrabold">
              Online is now <br /> much easier
            </span>
            <p className="text-[#464646] text-sm mt-5 leading-5">
              Skilline is an interesting platform that will teach <br />
              you in more an interactive way
            </p>
          </h1>

          <div className="flex items-center justify-around">
            <button className="w-[140px] h-[45px] bg-[#F48C06] text-white font-medium text-sm rounded-full mt-5">
              Join For Free
            </button>

            <div className="bg-white w-[50px] h-[50px] flex items-center justify-center rounded-full relative top-[10px] -right-[12px] md:-right-[12px] mr-3">
              <Image
                src={"/image/polygon.png"}
                width={15}
                height={15}
                className=""
                alt="Logo"
              />
            </div>

            <div>
              <p className="mt-6 text-center">Watch how it works</p>
            </div>
          </div>
        </div>

        <div className="md:mr-20  md:pl-[150px]">
          <Image
            src={"/image/model-image.png"}
            className="md:w-[400px] relative -bottom-[50px] md:bottom-0 md:-top-[0px]" // Atur ukuran gambar: 100px di layar kecil, 300px di layar medium
            sizes="(max-width: 768px) 100px, (min-width: 768px) 300px"
            width={300}
            height={300}
            alt="Logo"
          />

          <div>
            <div className="absolute top-0 mr-[100px] mt-[360px] xl:mt-[200px] right-0 xl:mr-[360px] flex gap-5 text-[#595959] bg-white/75 p-3 rounded-xl md:mr-[200px] md:mt-[200px]">
              <Image
                src={"/image/calendar.png"}
                alt="Calendar"
                width={40}
                height={40}
                className="bg-blue-400 p-2 rounded-xl"
              />
              <div>
                <h1 className="font-bold text-sm">250K</h1>
                <p className="font-semibold text-xs">Assisted Student</p>
              </div>
            </div>

            <div className="absolute top-0 mt-[750px] mr-[70px]  xl:mt-[400px] right-0 xl:mr-[290px] flex gap-5 text-[#595959] bg-white/90 p-3 rounded-xl  md:mt-[520px] ">
              <Image
                src={"/image/ellipse-people.png"}
                alt="Calendar"
                width={50}
                height={50}
                className="w-[50px] h-[50px] mt-3"
              />
              <div>
                <h1 className="font-bold text-sm">User Experience Class</h1>
                <p className="font-semibold text-xs">Today at 12.00 PM</p>
                <button className="w-[120px] h-[35px] bg-[#D8587E] rounded-full text-sm text-white mt-3">
                  Join Now
                </button>
              </div>
            </div>

            <div className="absolute top-0  mr-[20px]  mt-[600px] xl:mt-[300px] md:mt-[400px] right-0  xl:right-0 md:mr-[20px] flex gap-5 text-[#595959] bg-white/90 p-3 rounded-xl">
              <Image
                src={"/image/email.png"}
                alt="Calendar"
                width={20}
                height={20}
                className="w-[30px] h-[30px] mt-1 p-1 bg-[#F88C3D] rounded-sm"
              />
              <div>
                <h1 className="font-bold text-sm">Congratulations</h1>
                <p className="font-semibold text-xs">
                  Your admission completed
                </p>
              </div>
            </div>

            <div className="absolute top-0 mt-[350px] md:mt-[150px] right-0 md:mr-[60px] text-[#595959]">
              <Image
                src={"/image/volume.png"}
                alt="volume"
                width={80}
                height={80}
                className=""
              />
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
