import { createSlice , nanoid } from "@reduxjs/toolkit";
import { ProductItem } from "./interface"

const initialState:ProductItem[] =  [
    {
      id: nanoid(),
      title: "Blue t-shirt",
      description: "No fancy sizing charts here, one t-shirt size to rule them all",
      imageUrl: "/blue-tshirt.png",
      price: 399
    },
    {
        id: nanoid(),
      title: "Yellow t-shirt",
      description: "This unique t-shirt is guaranteed to fit nobody, not even new born babies",
      imageUrl: "/yellow-tshirt.png",
      price: 499
    },
    {
        id: nanoid(),
      title: "Red t-shirt",
      description: "The only product on our site that might actually be worth buying",
      imageUrl: "/red-tshirt.png",
      price: 799
    }
  ]

   const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers:{
        add: (state, action) => {
            return state.map(item => {
              if (item.id !== action.payload.id) {
                return item
              }
      
              return {
                ...item,
                added: true
              }
            })
          },

          remove: (state, action) => {
            return state.map(item => {
              if (item.id !== action.payload.id) {
                return item
              }
      
              return {
                ...item,
                added: false
              }
            })
          }
    }
  })

  export const {add , remove} = cartSlice.actions
  export default cartSlice.reducer

