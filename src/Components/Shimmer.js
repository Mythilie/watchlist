const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-4 mb-10 mt-5">
      {Array(12)
        .fill("")
        .map((e, index) => (
          <div key={index} className="bg-gray-200 w-[12rem] h-[14rem] "></div>
        ))}
    </div>
  );
};

export default Shimmer;
