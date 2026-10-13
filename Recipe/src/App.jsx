import { useEffect } from 'react'
import {useState} from 'react'
import MealCard from './components/MealCard'

const App = () => {
   const [recipe,setRecipe]=useState([])
   const [loading,setLoading]=useState(false)
  const [searchRecipe,setSearchRecipe]=useState('')
  const [error,setError]=useState(null)

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("meal_favorites");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("meal_favorites", JSON.stringify(favorites));
  }, [favorites]);

 const fetchRecipe=async ()=>{
  setError(null);
  setLoading(true)
       try{
       const response =await fetch("https://api.freeapi.app/api/v1/public/meals?page=1&limit=20")
       const data = await response.json();
       setRecipe(data?.data?.data || []);
       console.log(data)
       if (!data.success) {
        throw new Error(data.message || "Failed to load recipes");
      }
      if (!response.ok) {
        throw new Error("Failed to fetch recipes from server");
      }
       }catch(err){
      console.error("Failed to load Meals", err);
      setError(err.message || "Something went wrong while fetching recipes.");
      } finally {
      setLoading(false);
      }
  }
  useEffect(()=>{
    fetchRecipe();
  },[])

   const filteredRecipes=recipe.filter((meal)=>{
    return meal.strMeal?.toLowerCase().includes(searchRecipe.toLowerCase())
   })

   const toggleFavorite = (mealId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(mealId)
        ? prevFavorites.filter((id) => id !== mealId)
        : [...prevFavorites, mealId]
    );
  };
  return (
<div className="min-h-screen bg-orange-100 p-6">
      {/* Header & Controls Section */}
      <div className="w-full max-w-6xl mx-auto px-4 mb-8">
        {/* 1. Title strictly centered */}
        <h1 className="text-6xl font-extrabold text-orange-500 text-center mb-6">
          Recipe Finder
        </h1>

        {/* 2. Favorites badge aligned to the left right above the search box */}
        <div className="flex flex-col items-start gap-2 w-full">
          <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full font-semibold text-sm shadow">
            Favorites: {favorites.length}
          </span>

          {/* 3. Search Box taking the full width */}
          <input
            type="text"
            placeholder="Search recipe.."
            value={searchRecipe}
            onChange={(e) => setSearchRecipe(e.target.value)}
            className="w-full px-4 py-3 bg-white rounded-xl border border-orange-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-base"
          />
        </div>

        {/* Loading, Error & Empty Feedback Messages */}
        {loading && (
          <p className="text-center text-gray-600 font-medium mt-6">
            Loading recipes...
          </p>
        )}
        {error && (
          <p className="text-center text-red-600 font-semibold mt-6">
            {error}
          </p>
        )}
        {!loading && !error && filteredRecipes.length === 0 && (
          <p className="text-center text-gray-600 mt-6">
            No recipes match your search.
          </p>
        )}
      </div>

      {/* Cards Layout Section */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredRecipes.map((meal) => (
          <MealCard
            key={meal.id}
            id={meal.id}
            Photo={meal.strMealThumb}
            Title={meal.strMeal}
            Category={meal.strCategory}
            Cuisine={meal.strArea}
            isSaved={favorites.includes(meal.id)}
            onToggleFavorite={() => toggleFavorite(meal.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App
