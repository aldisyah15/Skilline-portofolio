import Image from "next/image";

export default function Image_Logo_Client() {
  return (
    <>
      <div className="flex flex-col gap-16 mt-5 md:mt-0 md:flex-row md:gap-6 lg:gap-16 items-center justify-center">
          <Image
            src={"/image/grab-logo.png"}
            alt="Grab Logo"
            width={100}
            height={100}
            className="cursor-pointer"
          ></Image>

          <Image
            src={"/image/facebook.png"}
            alt="facebook"
            width={100}
            height={100}
            className="cursor-pointer"
          ></Image>

          <Image
            src={"/image/amazon.png"}
            alt="amazon"
            width={100}
            height={100}
            className="cursor-pointer"
          ></Image>

          <Image
            src={"/image/airbnb.png"}
            alt="airbnb"
            width={100}
            height={100}
            className="cursor-pointer"
          ></Image>

          <Image
            src={"/image/netflix.png"}
            alt="netflix"
            width={100}
            height={100}
            className="cursor-pointer"
          ></Image>

          <Image
            src={"/image/google.png"}
            alt="google"
            width={100}
            height={100}
            className="cursor-pointer"
          ></Image>
        </div>
    </>
  );
}
