import { Switch } from "react-native";
import { ADD_PRODUCT, DELETE_PRODUCT } from "../actions/types";

function productsReducer(state = [], action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload]
        case DELETE_PRODUCT:
            console.log('product reducer: '+action.payload)
            return state.filter(product => product.id !== action.payload)    
        default:
            return state
    }
}

export default productsReducer