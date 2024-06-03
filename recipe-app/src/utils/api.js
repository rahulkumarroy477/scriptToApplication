
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes/',
  params: {
    apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY,
  },
});

export const getRecipeById = async (id) => {
  try {
    const response = await api.get(${id}/information);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe:', error);
    throw error;
  }
};

export const searchRecipes = async (query, number) => {
  try {
    const response = await api.get('complexSearch', {
      params: {
        query,
        number,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching recipes:', error);
    throw error;
  }
};

export default api;
