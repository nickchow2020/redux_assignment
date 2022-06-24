import {getInitAlbumInfo} from "../getInitAlbumInfo";

export const setInitState = (payload)=>{
  return {type: "FETCH_DATA", payload}
}

export function fetchDataFromAPI(name) {
  return async function thunk(dispatch) {
    let data = await getInitAlbumInfo(name)
    dispatch(setInitState(data))
  };
}

export const getDefaultDisplay = (payload)=>{
  return {type:"GET_INIT",payload}
}

export const AddOnDisplay = (payload)=>{
  return {type:"ADD_ON",payload}
}