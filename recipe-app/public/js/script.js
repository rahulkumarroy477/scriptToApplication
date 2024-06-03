
document.addEventListener('DOMContentLoaded', () => {
  const recipeContainer = document.getElementById('recipe-container');
  const recipeSearch = document.getElementById('recipe-search');

  recipeSearch.addEventListener('input', async (event) => {
    const searchTerm = event.target.value.trim();
    if (searchTerm.length < 3) return;

    try {
      const response = await fetch(/api/recipes?q=${searchTerm});
      const data = await response.json();

      recipeContainer.innerHTML = '';

      if (data.length === 0) {
        recipeContainer.innerHTML = '<p>No recipes found.</p>';
        return;
      }

      data.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');
        recipeElement.innerHTML = 
          <h3>${recipe.title}</h3>
          <p>${recipe.description}</p>
          <button data-recipe-id="${recipe.id}">View Recipe</button>
        ;

        recipeElement.querySelector('button').addEventListener('click', async () => {
          const recipeId = event.target.dataset.recipeId;
          const response = await fetch(/api/recipes/${recipeId});
          const recipeData = await response.json();

          recipeContainer.innerHTML = 
            <h2>${recipeData.title}</h2>
            <p>${recipeData.description}</p>
            <h3>Ingredients:</h3>
            <ul>
              ${recipeData.ingredients.map(ingredient => <li>${ingredient}</li>).join('')}
            </ul>
            <h3>Instructions:</h3>
            <ol>
              ${recipeData.instructions.map(instruction => <li>${instruction}</li>).join('')}
            </ol>
          ;
        });

        recipeContainer.appendChild(recipeElement);
      });
    } catch (error) {
      console.error(error);
      recipeContainer.innerHTML = '<p>An error occurred. Please try again later.</p>';
    }
  });
});
