import React from 'react';
import { Utensils, Flame } from 'lucide-react';

const MealPlanner = ({meals = []}) => {

  return (
    <div className="recipes-grid">
      {meals.length === 0 ? (
        <div className="empty-state">
          <p>No recipes found matching your search.</p>
        </div>
      ) : (
        meals.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <div className="card-top">
              <span className={`meal-badge ${recipe.mealType.toLowerCase()}`}>
                {recipe.mealType}
              </span>
              <div className="calorie-tag">
                <Flame size={14} />
                <span>{recipe.calories} kcal</span>
              </div>
            </div>

            <div className="card-heading">
              <Utensils size={18} className="recipe-icon" />
              <h3>{recipe.name}</h3>
            </div>

            <div className="ingredients-section">
              <strong>Ingredients:</strong>
              <p>
                {Array.isArray(recipe.ingredients) 
                  ? recipe.ingredients.join(", ") 
                  : recipe.ingredients}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MealPlanner;