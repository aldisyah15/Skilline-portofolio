import Image from "next/image";
import { useState } from "react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Andi Santoso",
      testimonial:
        "Layanan yang sangat membantu! Skilline benar-benar menghemat waktu dan usaha saya. Sangat direkomendasikan untuk bisnis apa pun yang membutuhkan efisiensi.",
    },
    {
      name: "Budi Setiawan",
      testimonial:
        "Skilline benar-benar memberikan solusi yang saya butuhkan. Tim mereka sangat profesional dan responsif terhadap kebutuhan kami. Sangat puas dengan layanannya.",
    },
    {
      name: "Citra Lestari",
      testimonial:
        "Saya tidak menyesal memilih Skilline. Ini adalah platform yang kami butuhkan untuk meningkatkan produktivitas bisnis. Sangat mengesankan!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <>
      <div className="relative top-[1200px] md:top-[1000px] flex flex-col md:flex-row  md:justify-center md:items-center mt-20 px-10 md:px-0">
        <div className="w-5/12  flex flex-col justify-center">
          <div className="flex items-center">
            <div className="bg-[#525596] w-[30px] h-[1px]"></div>
            <h1 className="text-[#525596] ml-3">TESTIMONIAL</h1>
          </div>

          <div className="text-[#2F327D] font-bold text-sm md:text-md mb-3">
            What They Say?
          </div>

          <div className="text-xs text-[#525596] w-[300px]">
            <p>
              Skilline has got more than 100k positive ratings from our users
              around the world.
            </p>
            <p className="mt-3 mb-3">
              Some of the students and teachers were greatly helped by the
              Skilline.
            </p>
            <p>Are you too? Please give your assessment</p>
          </div>
        </div>

        <div className=" flex ">
          <div className=" relative w-[300px] h-[300px]">
            <Image
              src={"/image/peopleTestimonial.png"}
              alt="peopleTestimonial"
              width={400}
              height={400}
              className=""
            />
            <div className="absolute right-0 top-1/4 translate-x-12">
              <Image
                src={"/image/arrowTestimonial.png"}
                alt="arrowTestimonial"
                width={100}
                height={100}
                className="cursor-pointer"
                onClick={nextTestimonial}
              />
            </div>
          </div>

          <div className="absolute bottom-0 md:translate-y-10 md:translate-x-9 translate-y-40">
            <div className="w-[18rem] md:w-[22rem] h-48 md:h-40 bg-white relative rounded-xl flex border">
              <div className="w-3 h-48 md:h-40 bg-[#F67766] rounded-lg -translate-x-1"></div>

              <div className="absolute text-xs text-[#5F5F7E] pl-10 pr-5 pt-5">
                <p className="border-l-[1px] border-[#BDBDD1] pl-4 leading-relaxed">
                  {testimonials[currentIndex].testimonial}
                </p>

                <div className="flex justify-around md:pt-5 pt-5">
                  <h1 className="font-semibold">
                    {testimonials[currentIndex].name}
                  </h1>
                  <Image
                    src={"/image/bintangTestimonial.png"}
                    alt="bintangTestimonial"
                    width={100}
                    height={100}
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
