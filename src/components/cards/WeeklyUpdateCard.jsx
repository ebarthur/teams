import { IoClose } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";
import { FaCaretDown } from "react-icons/fa";
import Profile from "../avatars/Profile";
import { Badge } from "../ui/badge";

const WeeklyUpdateCard = () => {
  return (
    <>
      <main className="mt-4 h-auto w-full bg-zinc-800 p-5">
        <div>
          {/* Header */}
          <div className="mb-6">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <h1 className="text-sm md:text-base font-semibold">
                  Weekly update
                </h1>
                <Badge className="cal px-1 md:px-1.5 uppercase border-none rounded">
                  Demo
                </Badge>
              </div>
              <div>
                <IoClose size={14} />
              </div>
            </div>
            <div className="text-white/60  w-3/4 md:w-full text-[0.76rem]">
              Due every Friday at 12:00 PM • Due Apr 12, 2024, 12:00 PM
            </div>
          </div>
          {/* Grid Body */}
          <div className="grid md:grid-cols-3 space-y-4 md:space-x-6 px-2 lg:px-6">
            {/* 1 */}
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-sm text-white/80">Submission status</h1>
              <div className="flex items-center gap-x-4 md:gap-x-2 lg:gap-4">
                <div className="text-xl md:text-2xl lg:text-4xl font-semibold">
                  60%
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-white/60 text-[0.76rem] w-3/4 lg:w-full">
                    Members who haven&apos;t submitted
                  </p>
                  <div className="flex space-x-2 items-center">
                    <div>
                      <Profile>KL</Profile>
                    </div>
                    <Button
                      variant="ghost"
                      className="text-white/80 text-xs md:text-sm rounded-none h-6 px-2 lg:h-8 lg:px-4 border-white/50"
                    >
                      Send Reminder
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-sm text-white/80">Do you need any help?</h1>
              <div className="flex justify-between space-x-14 md:space-x-4">
                {/* NO */}
                <div className="w-1/2 h-14 flex gap-2">
                  <Separator
                    className="calbank rounded"
                    orientation="vertical"
                  />
                  <div className="flex flex-col items-center justify-start">
                    <div className="text-white/60 font-semibold text-xs md:text-sm">
                      No
                    </div>
                    <div className="text-3xl text-white/80 font-semibold">
                      2
                    </div>
                  </div>
                </div>
                {/*YES */}
                <div className="w-full h-14 flex gap-2">
                  <Separator
                    className="calbank rounded"
                    orientation="vertical"
                  />
                  <div className="flex flex-col items-center justify-start">
                    <div className="text-white/60 font-semibold text-xs md:text-sm">
                      Yes
                    </div>
                    <div className="text-3xl text-white/80 font-semibold">
                      1
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-sm text-white/80">Overall Status</h1>
              <div className="flex justify-between space-x-12 md:space-x-0">
                {/* On track */}
                <div className="w-1/2 h-14 flex gap-2">
                  <Separator
                    className="calbank rounded"
                    orientation="vertical"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="text-white/60 font-semibold text-xs md:text-sm">
                      On track
                    </div>
                    <div className="text-3xl text-white/80 font-semibold">
                      <div className="flex items-end gap-2">
                        <div>2</div>
                        <div className="md:flex md:w-1/2 lg:w-full">
                          <FaCaretDown size={18} color="#c41111" />
                          <div className="text-xs md:text-sm">-33%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* At risk */}
                <div className="w-full h-14 flex gap-2">
                  <Separator
                    className="calbank rounded"
                    orientation="vertical"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="text-white/60 font-semibold text-xs md:text-sm">
                      At risk
                    </div>
                    <div className="text-3xl text-white/80 font-semibold">
                      1
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default WeeklyUpdateCard;
