import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/shopping-cart/cartSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export const mockData = [
  {
    id: 1,
    amountItems: 1,
    title: "Some TITLE FOR CAAARD",
    url: "https://i.ebayimg.com/images/g/WWkAAOSwO1Fje~4-/s-l1200.webp",
  },
  {
    id: 2,
    amountItems: 1,
    title: "Some TITLE FOR CAAARD",
    url: "https://i.ebayimg.com/images/g/WWkAAOSwO1Fje~4-/s-l1200.webp",
  },
  {
    id: 3,
    amountItems: 1,
    title: "Some TITLE FOR CAAARD",
    url: "https://i.ebayimg.com/images/g/WWkAAOSwO1Fje~4-/s-l1200.webp",
  },
  {
    id: 4,
    amountItems: 1,
    title: "Some TITLE FOR CAAARD",
    url: "https://i.ebayimg.com/images/g/WWkAAOSwO1Fje~4-/s-l1200.webp",
  },
];

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
