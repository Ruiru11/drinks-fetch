import api from "../../utils/endpoint";
import { db, storage } from "../../utils/setUpFirebase";
import * as types from "../types";


export const fetchCockTail = (id) => (dispatch) => {
  dispatch({ type: types.FETCH_COCKTAIL, id });
  api
    .getCockTail(id)
    .then((res) => {
      dispatch({
        type: types.FETCH_COCKTAIL_SUCCESS,
        payload: res.data.drinks[0],
      });
    })
    .catch((err) => {
      dispatch({
        type: types.FETCH_COCKTAIL_ERROR,
        payload: err.response,
      });
    });
};

export const fetchRandom = () => (dispatch) => {
  dispatch({ type: types.FETCH_RANDOM_DRINKS });
  api
    .getRandom()
    .then((res) => {
      dispatch({
        type: types.FETCH_RANDOM_DRINKS_SUCCESS,
        payload: res.data.drinks[0],
      });
    })
    .catch((err) => {
      dispatch({ type: types.FETCH_RANDOM_DRINKS_ERROR, payload: err.response.data });
    });
};

export const fetchPopular = (payload) => (dispatch) => {
  dispatch({ type: types.FETCH_POPULAR_DRINKS, payload });
  api
    .getPopular(payload)
    .then((res) => {
      dispatch({
        type: types.FETCH_POPULAR_DRINKS_SUCCESS,
        payload: res.data.drinks.slice(0, 5),
      });
    })
    .catch((err) => {
      dispatch({
        type: types.FETCH_POPULAR_DRINKS_ERROR,
        payload: err.response.data,
      });
    });
};

export const uploadImage = (payload) => (dispatch) => {
  dispatch({ type: types.UPLOAD_IMAGE, payload });
  storage
    .ref("images/" + payload.name)
    .put(payload)
    .then((snapshot) => {
      return snapshot.ref.getDownloadURL();
    })
    .then((url) => {
      dispatch({
        type: types.UPLOAD_IMAGE_SUCCESS,
        payload: { url, status: "done", name: payload.name },
      });
    })
    .catch((error) => {
      dispatch({ type: types.UPLOAD_IMAGE_ERROR, payload: error });
    });
};

export const postCockTail = (payload) => (dispatch) => {
  dispatch({ type: types.CREATE_COCKTAIL, payload });
  db.collection("cocktails")
    .add(payload)
    .then((doc) => {
      dispatch({ type: types.CREATE_COCKTAIL_SUCCESS, payload: doc });
      dispatch(fetchCustomCockTail({}));
    })
    .catch((err) => {
      dispatch({ type: types.CREATE_COCKTAIL_ERROR, payload: err });
    });
};

export const fetchCustomCockTail = (payload = {}) => (dispatch) => {
  const { strDrink } = payload;
  const cockTails = [];
  dispatch({ type: types.FETCH_CUSTOM_DRINKS });
  const collection = strDrink
    ? db.collection("cocktails").where("strDrink", "==", strDrink)
    : db.collection("cocktails");
  collection
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        cockTails.push(doc.data());
      });
      dispatch({ type: types.FETCH_CUSTOM_DRINKS_SUCCESS, payload: cockTails });
    })
    .catch((err) => {
      dispatch({ type: types.FETCH_CUSTOM_DRINKS_ERROR, payload: err });
    });
};
