import ServiceCard from "../molecules/ServiceCard";

export default function ServiceSection() {
  return (
    <>
      <div className="relative top-[950px] md:top-[700px] mt-32 flex flex-col items-center text-center gap-3">
        <h1 className="text-[#2F327D] text-xl font-bold">
          All-In-One <span className="text-[#F48C06]">Cloud Software.</span>
        </h1>

        <div className="px-2">
          <p className="text-[#2F327D] text-xs md:text-sm ">
            Skilline is one powerful online software suite that combines all the{" "}
            <span className="md:block">
              tools needed to run a successful school or office.
            </span>
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-10 xl:flex-row">
          <ServiceCard
            SrcImage={"/image/invoice.png"}
            AltImage={"Invoice"}
            BgImage={"bg-blue-500"}
            Title={"Online Billing, "}
            Title2={"Invoicing, & Contracts"}
            Description={
              "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts"
            }
          />

          <ServiceCard
            SrcImage={"/image/calendarCard.png"}
            AltImage={"calendarCard"}
            BgImage={"bg-[#F48C06]"}
            Title={"Easy Scheduling &"}
            Title2={"Attendance Tracking"}
            Description={
              "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance"
            }
          />

          <ServiceCard
            SrcImage={"/image/peopleCard.png"}
            AltImage={"peopleCard"}
            BgImage={"bg-[#29B9E7]"}
            Title={"Customer Tracking"}
            Title2={""}
            Description={
              "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts"
            }
          />
        </div>
      </div>
    </>
  );
}
