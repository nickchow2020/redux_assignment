import { combineReducers } from "redux";
import initData from "./albumReducer";
import performData from "./albumNeededReducer"

const rootReducer = combineReducers({
    init:initData,
    perform: performData
})

export default rootReducer