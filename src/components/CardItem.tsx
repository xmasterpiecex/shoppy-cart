import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import {
  IHomePageItems,
  addNewItem,
} from "../features/shopping-cart/cartSlice";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useAppDispatch, useAppSelector } from "../app/store";
import { useState } from "react";

export default function CardItem({ id, title, url }: IHomePageItems) {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((store) => store.cart);
  const chek = cartItems.some((item) => item.id === id);
  const [isAdded, setIsAdded] = useState(chek);

  return (
    <Card
      sx={{
        minHeight: 500,
        maxWidth: 335,
        width: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <CardMedia component="img" alt="" height="300" image={url} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </div>
      {isAdded ? (
        <div className="is-added-to-cart">Added to your cart</div>
      ) : (
        <CardActions sx={{ gap: "2rem", padding: "16px" }}>
          <Typography component="p">PRICE : 9.99$</Typography>
          <Button
            sx={{ marginLeft: 0 }}
            variant="contained"
            endIcon={<AddCircleIcon />}
            onClick={() => {
              dispatch(
                addNewItem({
                  id: id,
                  amountItems: 1,
                  title: title,
                  url: url,
                })
              );
              setIsAdded((v) => !v);
            }}
          >
            Add to a Cart
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
