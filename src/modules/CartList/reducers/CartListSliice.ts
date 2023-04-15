import { createSlice } from "@reduxjs/toolkit";
import { CartListState, addProductAction, cartItem, stateCartItem } from "../types/CartTypes";



const initialState : CartListState = {
    products: [],
    totalPrice: 0,
    totalCount: 0,
}

const generateStateCaerItem = (product: cartItem) : stateCartItem=> {
    return {...product, count: 1}
}

const addProductToCart = (state:  CartListState, p: cartItem | string) => {
    let product
    if(typeof p === "object"){
        product = state.products.find(product => product.type === p.type)

        if(!product){
            state.products.push(generateStateCaerItem(p))
            return null
        }
    }

    if(typeof p === "string"){
        product = state.products.find(product => product.type === p)
    }
    if(product)  product.count += 1
    
}



const incTotalValue = (state:  CartListState, index: number) => {
    state.totalPrice += state.products[index].price
    state.totalCount += 1
}

const decTotalValue = (state:  CartListState, index: number, count: number) => {
    state.totalPrice -= (state.products[index].price * count)
    state.totalCount -= count
}

const cartListSlice = createSlice({
    name: "cart",
    reducers: {
        addProduct: (state, action : addProductAction) => {
            addProductToCart(state, action.payload)
            const productIndex = state.products.findIndex(el => el.type === action.payload.type)
            incTotalValue(state, productIndex)
        },
        deleteProduct: (state, action) => {
            const productIndex = state.products.findIndex(el => el.type === action.payload)
            decTotalValue(state, productIndex, state.products[productIndex].count )
            state.products.splice(productIndex, 1)
        },
        incProductCount: (state, action) => {
            const productIndex = state.products.findIndex(el => el.type === action.payload)
            incTotalValue(state, productIndex)
            addProductToCart(state, action.payload)
            
        },
        decProductCount: (state, action) => {
            const productIndex = state.products.findIndex(el => el.type === action.payload)
            decTotalValue(state, productIndex, 1)
            if(state.products[productIndex].count - 1 <= 0){
                state.products.splice(productIndex, 1)
            }else{
                state.products[productIndex].count -= 1
            }
        }
    },
    initialState
})


const {actions, reducer} = cartListSlice

export default reducer

export const {
    addProduct,
    deleteProduct,
    incProductCount,
    decProductCount
} = actions