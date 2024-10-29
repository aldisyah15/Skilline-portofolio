import Image from "next/image";
import Link from "next/link";

export default function latihan() {
  return (
    <>
      <div className="mx-5 text-white mt-[100px] md:mx-10 flex">
        {/* Foto Article */}
        <div>
          <Link href="/article/Understanding-color-theory-the-color-wheel-and-finding-complementary-colors">
            <Image
              src={'https://picsum.photos/400/200'}
              alt="photo Article"
              width={400}
              height={200}
              className="rounded-xl mb-5"
            />
          </Link>
        </div>

        {/* content */}

<div>
<div className="mb-5">
          <div className=" text-sm text-gray-400 mb-5">
            ui ux 2024
          </div>

          <Link
            href={'#'}
            className="text-2xl leading-9 mb-3"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, itaque!
          </Link>

          <p className="text-md leading-7 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste commodi ab cupiditate doloremque tempore sit aliquid hic accusamus, facere beatae?</p>
        </div>

        <div className="flex mb-7">
          <Image
            src={`https://xsgames.co/randomusers/assets/avatars/female/33.jpg`}
            alt="photo profile"
            width={60}
            height={60}
            className=" rounded-full"
          />

          <span className="ml-3">
            <h1>aldiansyah</h1>
            <h1 className="text-sm text-gray-400">frontend</h1>
          </span>
        </div>

        <hr className="border-gray-400" />
</div>
      </div>
    </>
  );
}
