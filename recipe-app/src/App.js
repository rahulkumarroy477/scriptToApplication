
import React, { useState } from 'react';
import './App.css';
import RecipeList from './RecipeList';

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleRecipeSelection = (selectedRecipe) => {
    // Handle recipe selection logic here
    // For example, you can navigate to a new page or update the state with the selected recipe
    console.log('Selected recipe:', selectedRecipe);
  };

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <RecipeList recipes={recipes} onRecipeSelect={handleRecipeSelection} />
    </div>
  );
}

export default App;

