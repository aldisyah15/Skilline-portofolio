import Image from "next/image";

export default function ServiceCard({BgImage, SrcImage, AltImage, Title, Title2, Description}) {
    return (
        <>
        <div className="bg-white drop-shadow-2xl w-[280px] text-sm text-[#2F327D] flex flex-col px-4 pb-4">

        <div className={` w-[45px] h-[45px] flex items-center justify-center rounded-full mx-auto relative -top-5 ${BgImage}`}> 
        <Image src={`${SrcImage}`} alt={`${AltImage}`} width={15} height={15}/>
        </div>

           <h1 className="font-medium">{Title}<br />{Title2}</h1>
           <p className="text-[#696984] text-xs mt-3">{Description}</p>
        </div>
        </>
    )
}