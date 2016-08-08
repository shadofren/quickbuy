import {combineReducers} from "redux";

const initialState = {

};

const sampleReducer = (state=initialState, action) => {
    switch(action.type){
        case "FETCH_SUBREDDIT_START":{
            return Object.assign({}, state, {fetching:true, 
                fetched:false});
        }
        case "RECEIVE_SUBREDDIT":{
            return Object.assign({}, state, {fetching:false,
                fetched:true, error:null, result:action.payload});
        }
        case "FETCH_SUBREDDIT_ERROR":{
            return Object.assign({}, state, {fetching:false,
                error: action.payload});
        }
        case "SET_SUBREDDIT": {
            return Object.assign({}, state, {currentSubreddit: action.payload});
        }
    }
    return state;
};

const reducer = combineReducers({
    sample: sampleReducer
});

export default reducer;