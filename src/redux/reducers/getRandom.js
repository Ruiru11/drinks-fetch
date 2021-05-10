import {
    FETCH_RANDOM_DRINKS,
    FETCH_RANDOM_DRINKS_SUCCESS,
    FETCH_RANDOM_DRINKS_ERROR
  } from '../types'
  
  const INITIAL_STATE = {
    loading: false,
    data: {}
  }
  
  const random = (state = INITIAL_STATE, action) => {
    const { payload, type } = action
    switch (type) {
      case FETCH_RANDOM_DRINKS:
        return { ...state, loading: true }
      case FETCH_RANDOM_DRINKS_SUCCESS:
        return { ...state, loading: false, data: payload }
      case FETCH_RANDOM_DRINKS_ERROR:
        return { ...state, loading: false, data: payload }
      default:
        return state
    }
  }
  export default random
  