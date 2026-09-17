import React, { useState } from 'react'
import MealPlanner from './MealPlanner';
import { CookingPot } from 'lucide-react';

const Ui = (props) =>{
      const [searchQuery,setSearchQuery]=useState("")
      const [category,setCategory]=useState("All")
    
        const Meals = (props.recipes || []).filter((recipe) => {
            const categoryMatch=category === "All" || recipe.mealType === category;
    const searchMatch = (recipe.name || "")
      .toLowerCase()
      .includes((searchQuery || "").toLowerCase().trim());

    return categoryMatch && searchMatch;
  });
  return (
    <div className='planner-container'>
  <header className='planner-header'>
    <div className='title-row'>
      <CookingPot size={32} className='header-icon'/> 
      <h1>Weekly Meal Planner</h1>
      <p className='subtitle'>Discover ,filter,and plan your weekly balanced meals</p>
      </div>
      </header>
      <div className='controls-bar'>
        <div className='search-box'>
     <input type="text"
      placeholder='Search recipe here...'
     onChange={(e)=> setSearchQuery(e.target.value)}
     value={searchQuery}
       >
       </input>
       </div>
       <div className='filter-tabs'>
        {["All","Breakfast","Lunch","Dinner"].map((cat)=>(
     <button
     key={cat}
     className={`filter-btn ${category === cat ? "active" : ""}`}
      onClick={()=> setCategory(cat)}>{cat}</button>
        ))}
        </div>
        </div>
    <MealPlanner meals={Meals}/>

    </div>


  )
}

export default Ui
