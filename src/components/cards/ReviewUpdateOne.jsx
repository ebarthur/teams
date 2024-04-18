import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Profile from "../avatars/Profile";

const ReviewUpdateOne = () => {
  const name = "Richard William Baffoe";
  const person = "Kelvin Lamptey";
  return (
    <>
      <main className="mt-2 h-auto w-full bg-zinc-800 p-5">
        <div>
          <div className="flex items-center text-white/60 text-[0.76rem] gap-2">
            <div>
              <Profile variant="custom">RB</Profile>
            </div>
            <div className="">
              {name} <span className="opacity-10">|</span> {person}
            </div>
          </div>
          <hr className="opacity-30 my-2" />
          {/* Header */}
          <div className="mb-6">
            <div className="flex justify-between">
              <div>
                <h1 className="text-sm md:text-base font-semibold">
                  Weekly working hours update
                </h1>
              </div>
              <div>...</div>
            </div>
            <div className="text-white/60 w-3/4 md:w-full text-[0.76rem]">
              Due Mar 24, 2024, 1:46 PM
            </div>
          </div>
          {/* Grid Body */}
          <div className="grid md:grid-cols-3 space-y-4 md:space-x-6 px-2 lg:px-6">
            {/* 1 */}
            <div className="space-y-6">
              <h1 className="text-sm text-white/80">Submission status</h1>
              <div className="flex items-center gap-x-4">
                <div className="text-xl md:text-2xl lg:text-4xl font-semibold">
                  0%
                </div>
                <div className="space-y-2">
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
            <div className="space-y-6">
              <h1 className="text-sm text-white/80">Planned hours worked</h1>
              <div className="w-full h-14 flex gap-2">
                <Separator className="calbank rounded" orientation="vertical" />
                <div className="flex flex-col items-center justify-start">
                  <div className="text-white/60 font-semibold text-sm">
                    Total
                  </div>
                  <div className="text-3xl text-white/80 font-semibold">0</div>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="space-y-6">
              <h1 className="text-sm text-white/80">Actual hours worked</h1>
              <div className="w-full h-14 flex gap-2">
                <Separator className="calbank rounded" orientation="vertical" />
                <div className="flex flex-col items-center justify-start">
                  <div className="text-white/60 font-semibold text-sm">
                    Total
                  </div>
                  <div className="text-3xl text-white/80 font-semibold">0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ReviewUpdateOne;
