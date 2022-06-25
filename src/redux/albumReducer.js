const ININ_STATE ={
  resultCount:0,
  results:[],
  show:false,
  key:""
}

const albumReducer = (state=ININ_STATE,action)=>{
  switch (action.type){
    case "FETCH_DATA":
      return {...state,...action.payload}
    case "SHOW_DISPLAY":
      return {...state,show:true}
    case "UPDATE_KEY":
      return {...state,key:action.key}
    default:
      return state
  }
}


export default albumReducer