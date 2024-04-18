import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <main className="w-full h-[80vh] z-20 absolute">
        <div className=" h-full hero text-white p-16 md:p-28">
          <div className="flex flex-col items-start">
            <h1 className="text-3xl md:text-4xl max-w-[50rem] py-4 tracking-tight font-bold">
              Get a comprehensive overview of your team&apos;s work status every
              week
            </h1>
            <div className="flex space-x-4 justify-center items-center text-sm md:text-base">
              <p>
                Success story &quot;Bye scattered chats. Hello organized
                updates&quot;
              </p>
              <div className="text-sm">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
