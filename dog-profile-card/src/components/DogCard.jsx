const DogCard = ({ dog, isLoading, getRandomDog }) => {
  return (
    <div className="flex w-full max-w-md flex-col gap-4 rounded-2xl p-5 bg-white shadow-xl">
      {dog && (
        <>
          <img
            src={dog.image.url}
            alt={dog.name}
            className="h-55 w-full rounded-xl object-cover "
          />

          <h1 className="text-center text-2xl font-bold text-gray-900">
            {dog.name}
          </h1>

          <div className="flex flex-col gap-3">
            <div className="bg-slate-200 w-full shadow-lg p-1 rounded-2xl">
              <h1 className="font-bold text-stone-800 px-2">Breed Group:</h1>
              <span className="text-small px-2 opacity-70 ">
                {dog?.breed_group || "Not Available"}
              </span>
            </div>

            <div className="bg-slate-200 w-full shadow-lg p-1 rounded-2xl">
              <h1 className="font-bold text-stone-800 px-2">Breed For:</h1>
              <span className="text-small px-2 opacity-70 ">
                {dog?.bred_for || "Not Available"}
              </span>
            </div>

            <div className="bg-slate-200 w-full shadow-lg p-1 rounded-2xl">
              <h1 className="font-bold text-stone-800 px-2">Life Span:</h1>
              <span className="text-small px-2 opacity-70 ">
                {dog?.life_span || "Not Available"}
              </span>
            </div>

            <div className="bg-slate-200 w-full shadow-lg p-1 rounded-2xl">
              <h1 className="font-bold text-stone-800 px-2">Temperament:</h1>
              <span className="text-small px-2 opacity-70 ">
                {dog?.temperament || "Not Available"}
              </span>
            </div>

            <div className="bg-slate-200 w-full shadow-lg p-1 rounded-2xl">
              <h1 className="font-bold text-stone-800 px-2">Height:</h1>
              <span className="text-small px-2 opacity-70 ">
                {dog?.height?.metric} cm ({dog?.height?.imperial} in)
              </span>
            </div>

            <div className="bg-slate-200 w-full shadow-lg p-1 rounded-2xl">
              <h1 className="font-bold text-stone-800 px-2">Weight:</h1>
              <span className="text-small px-2 opacity-70 ">
                {dog?.weight?.metric} kg ({dog?.weight?.imperial} lb)
              </span>
            </div>
          </div>
        </>
      )}

      <button
        className="w-full rounded-lg bg-orange-500 font-semibold text-white transition hover:bg-orange-600 py-3"
        onClick={getRandomDog}
        disabled={isLoading}
      >
        {isLoading ? "fetching..." : "Get Random Dog"}
      </button>
    </div>
  );
};

export default DogCard;
