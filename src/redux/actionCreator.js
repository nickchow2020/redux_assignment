import {getInitAlbumInfo} from "../getInitAlbumInfo";

export const setInitState = (payload)=>{
  return {type: "FETCH_DATA", payload}
}

export const startLoading = ()=>{
  return {type: "START_LOADING"}
}

export const endLoading = ()=>{
  return {type: "END_LOADING"}
}

export function fetchDataFromAPI(name) {
  return async function thunk(dispatch) {
    dispatch(startLoading())
    let data = await getInitAlbumInfo(name)
    dispatch(setInitState(data))
    dispatch(endLoading())
    dispatch(updateKey(name))
  };
}

export const getDefaultDisplay = (payload)=>{
  return {type:"GET_INIT",payload}
}

export const AddOnDisplay = (payload)=>{
  return {type:"ADD_ON",payload}
}

export const showDisplay = ()=>{
  return {type: "SHOW_DISPLAY"}
}

export const updateKey = (key)=>{
  return {type: "UPDATE_KEY",key}
}