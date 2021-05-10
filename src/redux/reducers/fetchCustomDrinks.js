import {
    FETCH_CUSTOM_DRINKS,
    FETCH_CUSTOM_DRINKS_ERROR,
    FETCH_CUSTOM_DRINKS_SUCCESS
  } from '../types'
  
  const INITIAL_STATE = {
    loading: false,
    data: [],
    error: undefined
  }
  
  const fetchCustom = (state = INITIAL_STATE, action) => {
    const { payload, type } = action
    switch (type) {
      case FETCH_CUSTOM_DRINKS:
        return { ...state, loading: true }
      case FETCH_CUSTOM_DRINKS_SUCCESS:
        return { ...state, loading: false, data: payload }
      case FETCH_CUSTOM_DRINKS_ERROR:
        return { ...state, loading: false, error: payload }
      default:
        return state
    }
  }
  export default fetchCustom
  