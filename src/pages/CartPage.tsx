import CartItem from "../components/CartItem";
import { RootState, useAppDispatch, useAppSelector } from "../app/store";
import Button from "@mui/material/Button";
import { clearCart } from "../features/shopping-cart/cartSlice";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((store: RootState) => store.cart);

  if (cartItems.length < 1) {
    return (
      <div className="empty-cart">
        <h1>CART IS EMPTY</h1>
      </div>
    );
  }

  return (
    <>
      <div className="shopping-cart-container">
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        <div className="divder"></div>
        <Button
          variant="contained"
          size="large"
          onClick={() => dispatch(clearCart())}
        >
          Clear cart
        </Button>
      </div>
    </>
  );
}
