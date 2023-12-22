

import {createSlice} from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name : 'cart',
    initialState :{
        fooditems :[]
    },
    reducers :{
        addItem : function(state,action){
            state.fooditems.push(action.payload)
        },
        removeItem : function(state,action){
            const filteredItems = state.fooditems.filter((fooditem)=>fooditem.id!=action.id)
            state.fooditems = filteredItems
        },
        emptyCart : function(state,action){
            state.fooditems.length = 0
        }
    }
})



export const {addItem,removeItem,emptyCart} = cartSlice.actions
export default cartSlice.reducer