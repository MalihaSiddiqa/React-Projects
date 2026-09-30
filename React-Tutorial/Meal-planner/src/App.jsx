import React from 'react'
import MealPlanner from './MealPlanner'
import Ui from './ui';

const App = () => {
  const recipes = [
  {
    id: 1,
    name: "Avocado Toast with Poached Egg",
    mealType: "Breakfast",
    ingredients: [
      "2 slices sourdough bread",
      "1 ripe avocado",
      "2 large eggs",
      "Red pepper flakes",
      "Salt and black pepper"
    ],
    calories: 380
  },
  {
    id: 2,
    name: "Classic Berry Oatmeal Bowl",
    mealType: "Breakfast",
    ingredients: [
      "1/2 cup rolled oats",
      "1 cup almond milk",
      "1 tbsp honey",
      "1/2 cup mixed berries",
      "1 tbsp chia seeds"
    ],
    calories: 310
  },
  {
    id: 3,
    name: "Greek Yogurt Parfait",
    mealType: "Breakfast",
    ingredients: [
      "1 cup Greek yogurt",
      "1/4 cup granola",
      "1 tbsp chopped walnuts",
      "1 tbsp maple syrup",
      "1/2 sliced banana"
    ],
    calories: 340
  },
  {
    id: 4,
    name: "Spinach & Mushroom Omelette",
    mealType: "Breakfast",
    ingredients: [
      "3 large eggs",
      "1 cup baby spinach",
      "1/2 cup sliced mushrooms",
      "1/4 cup shredded cheddar",
      "1 tsp olive oil"
    ],
    calories: 320
  },
  {
    id: 5,
    name: "Peanut Butter Banana Smoothie Bowl",
    mealType: "Breakfast",
    ingredients: [
      "1 frozen banana",
      "2 tbsp peanut butter",
      "1/2 cup soy milk",
      "1 tbsp hemp seeds",
      "1/4 cup sliced strawberries"
    ],
    calories: 410
  },
  {
    id: 6,
    name: "Mediterranean Chickpea Salad",
    mealType: "Lunch",
    ingredients: [
      "1 can chickpeas",
      "1 diced cucumber",
      "1 cup cherry tomatoes",
      "1/4 cup feta cheese",
      "2 tbsp lemon vinaigrette"
    ],
    calories: 420
  },
  {
    id: 7,
    name: "Smoked Turkey & Avocado Wrap",
    mealType: "Lunch",
    ingredients: [
      "1 whole wheat tortilla",
      "4 oz smoked turkey breast",
      "1/4 sliced avocado",
      "1 cup baby arugula",
      "1 tbsp Dijon mustard"
    ],
    calories: 390
  },
  {
    id: 8,
    name: "Tuna Salad Stuffed Pita",
    mealType: "Lunch",
    ingredients: [
      "1 can skipjack tuna in water",
      "1 whole wheat pita pocket",
      "1 tbsp light mayonnaise",
      "1 stalk celery, diced",
      "1 cup shredded lettuce"
    ],
    calories: 350
  },
  {
    id: 9,
    name: "Caprese Panini",
    mealType: "Lunch",
    ingredients: [
      "2 slices ciabatta",
      "2 oz fresh mozzarella",
      "1 ripe tomato, sliced",
      "1 tbsp basil pesto",
      "1 tsp balsamic glaze"
    ],
    calories: 460
  },
  {
    id: 10,
    name: "Lemon Garlic Lentil Soup",
    mealType: "Lunch",
    ingredients: [
      "1 cup cooked brown lentils",
      "1 cup vegetable broth",
      "1 diced carrot",
      "2 cloves garlic, minced",
      "2 tbsp fresh lemon juice"
    ],
    calories: 290
  },
  {
    id: 11,
    name: "Grilled Lemon Herb Salmon",
    mealType: "Dinner",
    ingredients: [
      "6 oz wild salmon fillet",
      "1 bunch asparagus",
      "1 tbsp olive oil",
      "1 sliced lemon",
      "2 cloves garlic, minced"
    ],
    calories: 490
  },
  {
    id: 12,
    name: "Sesame Tofu Vegetable Stir-Fry",
    mealType: "Dinner",
    ingredients: [
      "7 oz firm tofu, cubed",
      "1 cup broccoli florets",
      "1 red bell pepper, sliced",
      "2 tbsp low-sodium soy sauce",
      "1 tbsp toasted sesame oil"
    ],
    calories: 360
  },
  {
    id: 13,
    name: "Grilled Chicken & Sweet Potato Bowl",
    mealType: "Dinner",
    ingredients: [
      "5 oz grilled chicken breast",
      "3/4 cup cooked quinoa",
      "1/2 cup roasted sweet potato",
      "1 cup steamed kale",
      "2 tbsp tahini dressing"
    ],
    calories: 520
  },
  {
    id: 14,
    name: "Classic Beef & Rice Stuffed Peppers",
    mealType: "Dinner",
    ingredients: [
      "2 large bell peppers",
      "4 oz lean ground beef",
      "1/2 cup cooked brown rice",
      "1/2 cup tomato sauce",
      "1/4 cup mozzarella cheese"
    ],
    calories: 475
  },
  {
    id: 15,
    name: "Shrimp & Zucchini Garlic Pasta",
    mealType: "Dinner",
    ingredients: [
      "6 oz peeled shrimp",
      "2 medium zucchinis (spiralized)",
      "2 oz whole wheat spaghetti",
      "1 tbsp olive oil",
      "1/4 tsp crushed red pepper flakes"
    ],
    calories: 410
  }
];
  return (
    <>
    <div className='card-grid'>
    <Ui recipes={recipes}/>
    </div>
    </>
  )
}

export default App

