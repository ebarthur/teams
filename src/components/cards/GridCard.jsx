import { CardItems } from "@/constants";

const GridCard = () => {
  return (
    <div className="my-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {CardItems.map((item, index) => (
          <div key={index} className="rounded-sm p-4 shadow-md bg-zinc-800">
            <div className="flex space-x-8 items-center">
              <div className="text-xl pl-4">{item.emoji}</div>
              <div>
                <h1 className="text-sm font-semibold">{item.title}</h1>
                <p className="text-white/60 text-[0.76rem]">
                  {item.description}
                </p>
              </div>
            </div>

            <p className="my-4 text-white/60 text-[0.76rem]">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridCard;
