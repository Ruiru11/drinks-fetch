import {
    FETCH_POPULAR_DRINKS,
    FETCH_POPULAR_DRINKS_SUCCESS,
    FETCH_POPULAR_DRINKS_ERROR
  } from '../types'
  
  const INITIAL_STATE = {
    loading: false,
    data: [],
    error: {}
  }
  
  const popular = (state = INITIAL_STATE, action) => {
    const { payload, type } = action
    switch (type) {
      case FETCH_POPULAR_DRINKS:
        return { ...state, loading: true }
      case FETCH_POPULAR_DRINKS_SUCCESS:
        return { ...state, loading: false, data: payload }
      case FETCH_POPULAR_DRINKS_ERROR:
        return { ...state, loading: false, error: payload }
      default:
        return state
    }
  }
  export default popular
  