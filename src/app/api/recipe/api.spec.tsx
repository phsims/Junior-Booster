import { fetchRecipes } from '../recipe/api'

describe('fetchRecipes function', () => {
  it('returns an array of Recipe objects', async () => {
    const recipes = await fetchRecipes();

    // Check that recipes is an array
    expect(Array.isArray(recipes)).toBe(true);

    // Optionally, check that each item in recipes has the expected properties
    if (recipes.length > 0) {
      const sampleRecipe = recipes[0];
      expect(sampleRecipe).toHaveProperty('id');
      expect(sampleRecipe).toHaveProperty('title');
      expect(sampleRecipe).toHaveProperty('summary');
    }
  });
});
