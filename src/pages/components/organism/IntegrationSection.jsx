import Image from "next/image";

export default function IntegrationSection() {
    return (
        <>
        <div className="relative top-[1200px] md:top-[1000px] flex flex-col md:flex-row justify-center items-center">
            <div className="md:w-5/12 px-5">
            <Image
              src={"/image/integrationSection.png"}
              alt="integrationSection"
              width={400}
              height={400}
              className="mx-auto"
            />
            </div>

            <div className="md:w-5/12 px-5 flex flex-col items-center md:items-start mt-5 md:mt-0">
                <div className="flex items-center">
                <div className="bg-[#525596] w-[30px] h-[1px]"></div>
                <h1 className="text-[#525596] ml-3">INTEGRATION</h1>
                </div> 

                <div className="text-[#2F327D] font-bold text-md mb-3">
                200+ educational tools and <br /> platform <span className="text-[#F48C06]">integrations</span>
                </div>

                <div className="text-[#696984] text-xs mb-3 md:pr-32">Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.</div>

                <div>
            <button className="w-[140px] h-[45px] border border-[#F48C06] rounded-full text-xs text-[#F48C06]">See all integration</button>
            </div>
            </div>
        </div>
        </>
    )
}