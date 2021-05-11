import { combineReducers } from "redux";
import cocktail from "./cocktails";
import random from "./getRandom";
import popular from "./getPopular";
import createCockTail from "./createDrink";
import uploadImage from "./uploadImage";
import fetchCustom from "./fetchCustomDrinks";

const rootReducer = combineReducers({
  popular,
  createCockTail,
  cocktail,
  random,
  uploadImage,
  fetchCustom,
});

export default rootReducer;
