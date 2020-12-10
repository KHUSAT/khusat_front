import {combineReducers} from 'redux';
import {persistReducer} from "redux-persist";
import result from "./action/result";
import survey from "./action/survey";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["result","survey"],
};

const rootReducer = combineReducers({
    result,
    survey
})

export default persistReducer(persistConfig,rootReducer);