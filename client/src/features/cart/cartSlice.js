import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: [],
    count: 0
}


const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const isExist = state.items.find((cartItem) => cartItem.id === item.id);

            if (isExist) {
                isExist.quantity++
            } else {
                state.items.push(item)
                state.count++
            }
        },
        updateQty: (state, action) => {
           const item = state.items.find((cartItem) => cartItem.id === action.payload.id);

            console.log(item);
            
            if (action.payload.change === "inc") {
                item.quantity++
            } else {
                item.quantity--
            }
        }
    }
})


export const { addToCart, updateQty } = cartSlice.actions
export default cartSlice.reducer