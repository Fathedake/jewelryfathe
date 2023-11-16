import { createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import type { PayloadAction } from "@reduxjs/toolkit";
 // src/redux/cartSlice.js
 import { ProductI } from '@/components/products/Product';
 export type ItemCart={
    product:ProductI,
    quantity:number,
 }
 export interface IndexItem{
    _id:string,
 }
 const initCart:Array<ItemCart>=[]
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: initCart,
  },
  reducers: {
    addToCart: (state, action :PayloadAction<ItemCart>) => {
      const itemInCart = state.cart.find((item:ItemCart)=>item.product?._id===action.payload.product?._id)//find((item) => item. === action.payload.id);
      const index = state.cart.findIndex((item:ItemCart) => item.product?._id===action.payload.product?._id);
      console.log(action.payload.quantity)
      if (itemInCart) {
        state.cart.splice(index, 1,{...action.payload,quantity:itemInCart?.quantity+action.payload.quantity});
      } else {
        state.cart.push({...action.payload});
      }
    },
    incrementQuantity: (state, action:PayloadAction<IndexItem>) => {
        const itemInCart = state.cart.find((item:ItemCart)=>item.product?._id===action.payload._id)//find((item) => item. === action.payload.id);
        const index = state.cart.findIndex((item:ItemCart) => item.product?._id===action.payload?._id);
       if(itemInCart){
        state.cart.splice(index, 1,{...itemInCart,quantity:itemInCart.quantity+1});
       }
    },
    decrementQuantity: (state, action:PayloadAction<IndexItem>) => {
        const itemInCart = state.cart.find((item:ItemCart)=>item.product?._id===action.payload._id)//find((item) => item. === action.payload.id);
        const index = state.cart.findIndex((item:ItemCart) => item.product?._id===action.payload?._id);
      if (itemInCart?.quantity === 1) {
        const newCart = state.cart.filter((item) => item.product?._id !== action.payload._id);
        state.cart =newCart;
      } else {
        if(itemInCart){
            state.cart.splice(index, 1,{...itemInCart,quantity:itemInCart.quantity-1});
        }
 
      }
    },
    removeItem: (state, action:PayloadAction<IndexItem>) => {
      console.log('payload',action.payload)
        const newCart = state.cart.filter((item) => item.product?._id !== action.payload._id);
        state.cart =newCart;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;