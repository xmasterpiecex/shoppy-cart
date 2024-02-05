import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ICartSlice {
  isLoading: boolean;
  amountInCart: number;
  cartItems: ICartItem[];
  homePageItems: IHomePageItems[];
}

export interface ICartItem {
  id: number;
  url: string;
  title: string;
  amountItems: number;
}
export interface IHomePageItems {
  id: number;
  url: string;
  title: string;
  albumId: number;
}

const initialState: ICartSlice = {
  homePageItems: [],
  cartItems: [],
  amountInCart: 0,
  isLoading: false,
};

export const fetchAllItems = createAsyncThunk(
  "cart/fetchAllItems",
  async () => {
    const resp = await axios(
      "https://jsonplaceholder.typicode.com/albums/1/photos"
    );

    return resp.data;
  }
);

const cartSlice = createSlice({
  name: "shopping-cart",
  initialState,
  reducers: {
    addNewItem: (state, action) => {
      state.cartItems.push(action.payload);
      state.amountInCart = state.amountInCart + 1;
    },
    deleteItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.amountInCart = state.amountInCart - 1;
    },
    incrementAmount: (state, action) => {
      const currItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      currItem!.amountItems = currItem!.amountItems + 1;
      state.amountInCart = state.amountInCart + 1;
    },
    decrementAmount: (state, action) => {
      const currItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      currItem!.amountItems = currItem!.amountItems - 1;
      state.amountInCart = state.amountInCart - 1;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.amountInCart = 0;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.homePageItems = action.payload;
      })
      .addCase(fetchAllItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default cartSlice.reducer;

export const {
  incrementAmount,
  decrementAmount,
  clearCart,
  addNewItem,
  deleteItem,
} = cartSlice.actions;
