import { IoClose } from "react-icons/io5";
import GridCard from "../components/cards/GridCard";
import WeeklyUpdateCard from "../components/cards/WeeklyUpdateCard";
import ReviewUpdateOne from "../components/cards/ReviewUpdateOne";
import ReviewUpdateTwo from "../components/cards/ReviewUpdateTwo";
import { Button } from "@/components/ui/button";
import TableSection from "@/components/cards/TableSection";

const Updates = () => {
  const name = "Richard William Baffoe";
  return (
    <>
      <main className="w-screen h-auto z-40 text-white relative top-96">
        <div className="mx-auto container w-[95%] lg:w-[90%] px-0 py-2 md:p-10 bg-[#050505]/80 space-y-4">
          <div className="flex flex-col md:flex-row space-y-2 justify-between">
            <div className="font-semibold w-[90%] md:w-1/2 lg:w-full px-4 md:text-lg lg:text-2xl tracking-tight">
              👋 Hi {name}, welcome to Updates!
            </div>
            <div className="space-x-4 flex justify-center md:flex-none">
              <Button
                variant="ghost"
                className="text-white/80 rounded-none text-xs md:text-sm h-6 px-2  lg:h-8 lg:px-4 border-white/50"
              >
                Quick update
              </Button>
              <Button className="cal rounded-none text-xs md:text-sm hover:border h-6 px-2 lg:h-8 lg:px-4">
                Collect updates
              </Button>
            </div>
          </div>
          <div className="container h-full w-full cal p-5">
            <div className="flex justify-between items-center">
              <div className="font-semibold text-sm lg:text-lg">
                Get started by collecting updates from your team
              </div>
              <div className="flex justify-center items-center space-x-2 md:space-x-6">
                <div className="text-xs">Explore all templates </div>
                <IoClose size={20} />
              </div>
            </div>
            {/* Card 1 */}
            <GridCard />
            <div className="font-semibold text-sm lg:text-base">
              <h2>You&apos;ll learn your team&apos;s status like this...</h2>
            </div>
            <WeeklyUpdateCard />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-sm font-semibold text-white/90 mt-2 ">
              Review Updates
            </div>
            <ReviewUpdateOne />
            <ReviewUpdateTwo />
            <TableSection />
          </div>
        </div>
      </main>
    </>
  );
};

export default Updates;
