const ININ_STATE ={
  resultCount:0,
  results:[]
}

const albumReducer = (state=ININ_STATE,action)=>{
  switch (action.type){
    case "FETCH_DATA":
      return {...state,...action.payload}
    default:
      return state
  }
}


export default albumReducer