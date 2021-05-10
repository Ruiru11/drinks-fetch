import {
    CREATE_COCKTAIL,
    CREATE_COCKTAIL_ERROR,
    CREATE_COCKTAIL_SUCCESS
  } from '../types'
  
  const INITIAL_STATE = {
    data: undefined,
    error: undefined,
    loading: false
  }
  const createCocktail = (state = INITIAL_STATE, action) => {
    const { type, payload } = action
    switch (type) {
      case CREATE_COCKTAIL:
        return { ...state, loading: true, payload }
      case CREATE_COCKTAIL_ERROR:
        return { ...state, loading: false, data: payload }
      case CREATE_COCKTAIL_SUCCESS:
        return { ...state, loading: false, error: payload }
      default:
        return state
    }
  }
  
  export default createCocktail
  