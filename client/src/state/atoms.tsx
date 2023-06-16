import { RecipeI } from 'interfaces';
import { atom } from 'recoil';

export const recipesState = atom<RecipeI[]>({
  key: 'recipesState',
  default: [],
});

export const wishtlistDisplayState = atom({
  key:'wishtlistDisplayState',
  default: false,
})