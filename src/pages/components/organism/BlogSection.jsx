import MiniNewsCard from "../molecules/MiniNewsCard";
import NewsCard from "../molecules/newsCard";

export default function BlogSection() {
  return (
    <>
      <div className="relative top-[1400px] md:top-[1200px] grid md:grid-cols-2  md:px-32 pl-5 gap-8 h-0">
        <NewsCard />
        <div className="grid gap-4">
          <MiniNewsCard SrcImage="/image/newsPhoto2.png" Title="Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand" Description={"Class Technologies Inc., the company that created Class,..."}/>
          <MiniNewsCard SrcImage="/image/newsPhoto3.png" Title="Zoom’s earliest investors are betting millions on a better Zoom for schools" Description={"Zoom was never created to be a consumer product. Nonetheless, the..."}/>
          <MiniNewsCard SrcImage="/image/newsPhoto4.png" Title="Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms" Description={"This year, investors have reaped big financial returns from betting on Zoom..."}/>
        </div>
      </div>
    </>
  );
}
