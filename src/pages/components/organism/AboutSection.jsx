import Link from "next/link";
import AboutCard from "../molecules/aboutCard";
import Image from "next/image";

export default function AboutSection() {
  return (
    <>
      <div className="relative top-[1000px] md:top-[800px] flex flex-col items-center text-center gap-4 text-wrap">
        <h1 className="text-[#2F327D] text-xl font-bold">
          What is <span className="text-[#F48C06]">Skilline?</span>
        </h1>

        <div className="px-2 ">
          <p className="text-[#696984] text-xs md:text-sm md:w-[709px] text-justify [text-align-last:center]">
            Skilline is a platform that allows educators to create online
            classes whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>

        <div className="flex flex-col md:grid xl:grid-cols-2 gap-10 md:pl-0">
           <div className="justify-self-end">
           <AboutCard
              SrcImage={"/image/peopleCard-1.png"}
              Title={"FOR INSTRUCTORS"}
              ButtonText={"Start a class today"}
            />
           </div>



            <div className="justify-self-end xl:justify-self-start">
            <AboutCard
              SrcImage={"/image/peopleCard-2.png"}
              Title={"FOR INSTRUCTORS"}
              ButtonText={"Enter access code"}
            />
            </div>


          <div className=" text-left text-wrap w-[300px] md:w-[450px] pt-10 ml-12">
            {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus debitis, nulla impedit et ex numquam ad magnam iste pariatur. Aut!</p> */}
            <h1 className="text-[#2F327D]  text-xl font-bold">
              Everything you can do in a physical classroom,{" "}
              <span className="text-[#F48C06]">you can do with Skilline</span>
            </h1>
            <p className="text-[#696984] text-xs text-left mt-5 text-wrap">
              Skilline’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>

            <h1 className="text-[#2F327D] text-xs mt-6 cursor-pointer underline">
              Learn more
            </h1>
          </div>

          <div className="relative px-10 md:pl-0 inline-block w-[400px]">
            <Image
              src={"/image/PhotoClassroom.png"}
              alt="Classroom photo"
              width={400}
              height={400}
            />
            <Image
              src={"/videoPlayy.svg"}
              alt="Classroom photo"
              width={50}
              height={50}
              className="absolute inset-0 mx-auto my-auto cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}
