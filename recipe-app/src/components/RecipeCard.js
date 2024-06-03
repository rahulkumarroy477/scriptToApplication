
import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.imageUrl} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <p>{recipe.shortDescription}</p>
      <Link to={/recipe/${recipe.id}}>View Recipe</Link>
    </div>
  );
};

export default RecipeCard;
