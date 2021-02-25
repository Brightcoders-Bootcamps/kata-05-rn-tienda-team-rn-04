import {ADD_PRODUCT, DELETE_PRODUCT} from './types'

export function add_product(product){
    return {
        type: ADD_PRODUCT,
        payload: product 
    }
}

export function delete_product(productId){
    console.log(productId)
    return {
        type: DELETE_PRODUCT,
        payload: productId
    }
}