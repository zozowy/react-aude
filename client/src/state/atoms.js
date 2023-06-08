const { atom } = require('recoil');

export const recipesState = atom({
  key: 'recipesState',
  default: [],
});

export const wishtlistDisplayState = atom({
  key:'wishtlistDisplayState',
  default: false,
})