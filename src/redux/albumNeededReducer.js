const ININ_STATE ={
  resultCount:0,
  results:[],
  loading: true
}

const albumReducer = (state=ININ_STATE,action)=>{
  switch (action.type){
    case "GET_INIT":
      return {...state,...action.payload}
    case "ADD_ON":
      return {...state,...action.payload}
    case "START_LOADING":
      return {...state,loading:true}
    case "END_LOADING":
      return {...state,loading:false}
    default:
      return state
  }
}


export default albumReducer