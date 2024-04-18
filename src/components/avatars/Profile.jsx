const Profile = ({ className, children, variant = "default", size = "md" }) => {
  let bgClass = "";
  if (variant === "default") {
    bgClass = "bg-[#cd5b12]";
  } else if (variant === "custom") {
    bgClass = "bg-[#a21212]";
  }

  let sizeClass = "";
  switch (size) {
    case "sm":
      sizeClass = "w-4 h-4";
      break;
    case "md":
      sizeClass = "w-6 h-6";
      break;
    case "lg":
      sizeClass = "w-8 h-8";
      break;
    default:
      sizeClass = "w-6 h-6";
  }

  return (
    <main>
      <div
        className={`rounded-full hover:border border-white/70 cursor-pointer text-black grid place-content-center text-xs md:text-sm ${sizeClass} lg:${sizeClass} ${bgClass} ${className}`}
      >
        {children}
      </div>
    </main>
  );
};

export default Profile;
