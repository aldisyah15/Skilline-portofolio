import Image from "next/image";

export default function FeatureSection() {
  return (
    <>
      <div className="relative top-[1100px] md:top-[900px] flex justify-center items-center flex-col">
        <div className="flex flex-col items-center">
          <h1 className="text-[#2F327D] font-bold text-xl">
            Our <span className="text-[#F48C06]">Features</span>
          </h1>
          <p className="text-[#696984] text-sm pl-5 md:pl-0">
            This very extraordinary feature, can make learning activities more
            efficient
          </p>
        </div>

        <div className="flex mt-20 flex-col md:flex-row">
          <div className="px-14">
            <Image
              src={"/image/photoMeeting.png"}
              alt="Classroom photo"
              width={600}
              height={400}
            />
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-[#2F327D] font-bold text-xl ">
              A <span className="text-[#F48C06]">user interface </span>designed{" "}
              <br /> for the classroom
            </h1>

            <div className="flex text-xs w-96 items-center mt-10 px-8 md:px-0 pl-12">
              <div className=" flex items-center justify-center">
                <Image
                  src={"/image/featureSection2.png"}
                  alt="feature"
                  width={20}
                  height={20}
                  className="z-20"
                />
                <div className="bg-white rounded-full w-[40px] h-[40px] absolute shadow-xl"></div>
              </div>

              <h1 className="pl-10 text-[#696984]">
                Teachers don’t get lost in the grid view and have a dedicated
                Podium space.
              </h1>
            </div>

            <div className="flex text-xs w-96 items-center mt-10 px-8  md:px-0 pl-12">
              <div className=" flex items-center justify-center">
                <Image
                  src={"/image/featureSection1.png"}
                  alt="feature"
                  width={20}
                  height={20}
                  className="z-20"
                />
                <div className="bg-white rounded-full w-[40px] h-[40px] absolute shadow-xl"></div>
              </div>
              <h1 className="pl-10 text-[#696984]">
                TA’s and presenters can be moved to the front of the class.
              </h1>
            </div>

            <div className="flex text-xs w-96 items-center mt-10 px-8  md:px-0 pl-12">
              <div className=" flex items-center justify-center">
                <Image
                  src={"/image/featureSection3.png"}
                  alt="feature"
                  width={20}
                  height={20}
                  className="z-20"
                />
                <div className="bg-white rounded-full w-[40px] h-[40px] absolute shadow-xl"></div>
              </div>
              <h1 className="pl-10 text-[#696984]">
                Teachers can easily see all students and class data at one time.
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-20">
          <div className="md:w-5/12 px-5">
            <h1 className="text-[#2F327D] font-bold text-xl mb-5">
              <span className="text-[#F48C06]">Tools </span>For Teachers <br />{" "}
              And Learners
            </h1>
            <p className="text-[#696984] text-xs md:pr-32 text-justify">
              Class has a dynamic set of teaching tools built to be deployed and
              used during class. Teachers can handout assignments in real-time
              for students to complete and submit.
            </p>
          </div>
          <div className="mt-10 md:mt-0">
            <Image
              src={"/image/peopleCardFeature.png"}
              alt="peopleCardFeature"
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-20">
          <div className="md:w-5/12">
            <Image
              src={"/image/cardFeature.png"}
              alt="peopleCardFeature"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
          <div className="md:w-5/12 md:ml-32">
            <h1 className="text-[#2F327D] font-bold text-xl mb-5 px-5">
              <span className="text-[#F48C06]">
                Assessments <br />
              </span>
              , Quizzes, Tests
            </h1>
            <p className="text-[#696984] px-5 md:pr-32 text-justify text-xs">
              Easily launch live assignments, quizzes, and tests. Student
              results are automatically entered in the online gradebook.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-10 md:mt-0">
        <div className="md:w-5/12 md:ml-32">
           <div>
           <h1 className="text-[#2F327D] font-bold text-xl mb-5 px-5">
              <span className="text-[#F48C06]">
              Class Management <br />
              </span>
              Tools for Educators
            </h1>
           </div>
            <p className="text-[#696984] px-5 md:pr-32 text-justify text-xs">
            Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
            </p>
          </div>

          <div className="md:w-5/12">
            <Image
              src={"/image/aducator.png"}
              alt="peopleCardFeature"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-10 md:mt-0">
        <div className="md:w-5/12">
            <Image
              src={"/image/discution.png"}
              alt="peopleCardFeature"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>

          <div className="md:w-5/12 md:ml-32 flex items-center flex-col md:items-start">
           <div className="flex items-center">
            <h1 className="text-[#2F327D] font-bold text-xl mb-5 px-5">
              One-on-One <br /> <span className="text-[#F48C06]">Discussions</span>
            </h1>
            </div>
            <p className="text-[#696984] px-5 md:pr-32 text-justify text-xs">
            Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
            </p>
          </div>
        </div>

        <div>
            <button className="w-[140px] h-[45px] border border-[#F48C06] rounded-full text-xs text-[#F48C06]">See more features</button>
            </div>
      </div>
    </>
  );
}
