
const MealCard = (props) => {
  return (
    <div className="w-120 border rounded-2xl shadow-sm overflow-hidden m-2 bg-white border-none">
      <img src={props.Photo} 
      alt={props.Title}
      className="w-full h-64 object-cover"/>
      <h2 className="text-2xl font-bold px-2">{props.Title}</h2>
      <h2 className="opacity-75 px-2">{props.Category}-{props.Cuisine}</h2>
      
      <div className="px-4 pb-4">
        <button
          onClick={props.onToggleFavorite}
          className={`w-full py-1.5 text-sm font-semibold rounded-lg border transition-colors ${
            props.isSaved
              ? "bg-orange-600 text-white"
              : "bg-white text-orange-600 border-orange-500 hover:bg-orange-50"
          }`}
        >
          {props.isSaved ? "Saved!" : "Save"}
        </button>
      </div>

    </div>
  )
}

export default MealCard;
