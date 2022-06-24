const ININ_STATE ={
  resultCount:0,
  results:[]
}

const albumReducer = (state=ININ_STATE,action)=>{
  switch (action.type){
    case "GET_INIT":
      return {...state,...action.payload}
    case "ADD_ON":
      return {...state,...action.payload}
    default:
      return state
  }
}


export default albumReducer