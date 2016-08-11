import {combineReducers} from "redux";
import addedItems from './addedItems';

const reducer = combineReducers({
    items: addedItems
});

export default reducer;