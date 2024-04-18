import Profile from "../avatars/Profile";

const ReviewUpdateTwo = () => {
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
                  Monday update
                </h1>
              </div>
              <div>...</div>
            </div>
            <div className="text-white/60 w-3/4 md:w-full text-[0.76rem]">
              Available at any time
            </div>
          </div>
          {/* 1 */}
          <div className="px-2 lg:px-6">
            <div className="space-y-6">
              <h1 className="text-sm text-white/80">Total submission</h1>
              <div>
                <div className="text-4xl font-semibold">1</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ReviewUpdateTwo;
