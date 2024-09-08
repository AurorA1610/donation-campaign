import "animate.css";
const Banner = () => {
  return (
    <div className="pt-12 pb-40 flex flex-col justify-center items-center">
      <h1 className="pt-24 text-5xl font-bold text-zinc-950 mb-12 text-center animate__animated animate__slideInDown">
        We Grow By Helping People In Need.
      </h1>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search here...."
          className="outline-none rounded-l-lg border-l-2 border-y-2 border-neutral-200 focus:border-red-500 ease-in-out duration-150 text-stone-400 p-3 text-sm"
        />
        <button className="rounded-r-lg bg-red-500 p-3 text-white text-base font-semibold">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
