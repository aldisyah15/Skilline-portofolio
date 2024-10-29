import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({
  photo_Article,
  title,
  date,
  subtitle,
  content,
  photo_Profile,
  authorName,
  jobTitle,
}) {
  return (
    <>
      <div className="mx-5 text-white mt-[100px] md:mx-10 flex">
        {/* Foto Article */}
        <div>
          <Link href="/article/Understanding-color-theory-the-color-wheel-and-finding-complementary-colors">
            <Image
              src={photo_Article}
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
              {title}* {date}
            </div>

            <Link
              href={
                "/article/Understanding-color-theory-the-color-wheel-and-finding-complementary-colors"
              }
              className="text-2xl leading-9 mb-3"
            >
              {subtitle}
            </Link>

            <p className="text-md leading-7 text-gray-400">{content}</p>
          </div>

          <div className="flex mb-7">
            <Image
              src={`${photo_Profile}`}
              alt="photo profile"
              width={60}
              height={60}
              className=" rounded-full"
            />

            <span className="ml-3">
              <h1>{authorName}</h1>
              <h1 className="text-sm text-gray-400">{jobTitle}</h1>
            </span>
          </div>

          <hr className="border-gray-400" />
        </div>
      </div>
    </>
  );
}
