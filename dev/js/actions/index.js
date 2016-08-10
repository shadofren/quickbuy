import axios from "axios";

export function addItem(item){
    return function(dispatch){
        dispatch({type: "ADD_ITEM", payload: item})
    }
}

export function removeItem(index){
    return function(dispatch){
        dispatch({type: "REMOVE_ITEM", payload: index})
    }
}
