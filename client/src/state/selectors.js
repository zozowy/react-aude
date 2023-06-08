import { selector, selectorFamily } from 'recoil';
import { recipesState } from './atoms';
import { getRecipe } from 'apis';

export const selectFilteredRecipes = selectorFamily({
  key: 'selectFilteredRecipes',
  get:
    (filter) =>
    ({ get }) => {
      const recipes = get(recipesState);
      return (
        recipes.length &&
        recipes.filter((r) => r.title.toLowerCase().startsWith(filter))
      );
    },
});

export const selectActiveRecipe = selectorFamily({
    key: 'selectActiveRecipe',
    get:  recipeId => async () => recipeId && (await(getRecipe(recipeId))),
});

export const selectWishedRecipes = selector({
  key: 'selectWishedRecipes',
  get: ({ get }) => get(recipesState)?.filter( (r) => r.liked)
});