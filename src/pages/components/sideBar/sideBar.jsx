import Link from "next/link";

export default function SideBar({isOpen}) {
    return (
        <>
            <div className={`absolute md:relative text-white top-20 md:top-0  w-[70%] h-64 bg-gray-500 shadow-xl rounded-lg md:w-0 md:h-0 ${isOpen ? "" : "hidden"}`}>
                <nav className="flex flex-col h-full justify-around ml-5 md:flex md:flex-row md:items-center">
                    <Link href={'#'} className="mr-4  text-nowrap">
                        Ui Design
                    </Link>

                    <Link href={'#'} className="mr-4  text-nowrap">
                        Front End
                    </Link>

                    <Link href={'#'} className="mr-4 text-nowrap">
                        Back End
                    </Link>

                    <Link href={'#'} className="mr-4  text-nowrap">
                        Lainnya
                    </Link>
                </nav>
            </div>
        </>
    )
}