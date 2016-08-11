
function addedItems(state = [], action) {
  // For now, don’t handle any actions
  // and just return the state given to us.
  switch(action.type){
      case "ADD_ITEM":
        // payload passes the item
        state = [...state, action.payload];
        return state;
      case "REMOVE_ITEM":
        // payload passes the index to be remove
        state = [...state.splice(0,action.payload),...state.splice(1)]
        return state;
      default: 
        return state;          
  }
}

export default addedItems; 