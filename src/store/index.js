import {combineReducers} from 'redux';
import result from "./action/result";
import survey from "./action/survey";

const rootReducer = combineReducers({
    result,
    survey
})

export default rootReducer;