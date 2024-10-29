export default function NotFound() {
    return (
        <>
        <div className="absolute top-32 text-white flex flex-col items-center justify-center mx-7 -z-50">
            <div className="text-2xl">
                <h1 className="">Search : </h1>
            </div>

            <div className="flex flex-col items-center relative top-60">
                <h1 className="text-4xl mb-3">No result 😥</h1>
                <h1 className="text-center text-sm">We couldn’t find any posts with the keyword ` `. Please try another keyword.</h1>
            </div>
        </div>
        </>
    )
}