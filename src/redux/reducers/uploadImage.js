import {
    UPLOAD_IMAGE,
    UPLOAD_IMAGE_ERROR,
    UPLOAD_IMAGE_SUCCESS
  } from '../types'
  
  const INITIAL_STATE = {
    loading: false,
    data: undefined,
    error: undefined
  }
  const uploadImage = (state = INITIAL_STATE, action) => {
    const { type, payload } = action
    switch (type) {
      case UPLOAD_IMAGE:
        return { ...state, loading: true, payload }
      case UPLOAD_IMAGE_SUCCESS:
        return { ...state, loading: false, data: payload }
      case UPLOAD_IMAGE_ERROR:
        return { ...state, loading: false, error: payload }
      default:
        return state
    }
  }
  
  export default uploadImage
  