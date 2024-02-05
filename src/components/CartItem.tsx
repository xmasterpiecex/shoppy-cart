import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useAppDispatch } from "../app/store";
import {
  deleteItem,
  incrementAmount,
  decrementAmount,
  ICartItem,
} from "../features/shopping-cart/cartSlice";

export default function CartItem({ id, title, url, amountItems }: ICartItem) {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="card-in-cart-container">
        <div className="left-side-card">
          <img src={url} alt="someIMG" style={{ maxWidth: "80px" }} />
          <>{title}</>
        </div>
        <div className="right-side-card">
          <h5>Amount</h5>
          <Button
            variant="text"
            size="large"
            onClick={() => {
              if (amountItems === 1) {
                dispatch(deleteItem(id));
              } else {
                dispatch(decrementAmount(id));
              }
            }}
          >
            <RemoveIcon color="warning"></RemoveIcon>
          </Button>
          <>{amountItems}</>
          <Button
            variant="text"
            size="large"
            onClick={() => dispatch(incrementAmount(id))}
          >
            <AddIcon color="primary"></AddIcon>
          </Button>
        </div>
      </div>
    </>
  );
}
