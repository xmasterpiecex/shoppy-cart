import { useAppDispatch, useAppSelector } from "../app/store";
import { useEffect } from "react";
import { fetchAllItems } from "../features/shopping-cart/cartSlice";
import CardItem from "../components/CardItem";
import CircleIcon from "@mui/icons-material/Circle";
import { Grow } from "@mui/material";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { homePageItems, isLoading } = useAppSelector((store) => store.cart);

  useEffect(() => {
    dispatch(fetchAllItems());
    console.log("render");
  }, [dispatch]);

  return (
    <>
      <div className="shop-container">
        {isLoading ? (
          <div className="empty-cart">
            <Grow in={isLoading}>{<CircleIcon color="warning" />}</Grow>
            <Grow
              in={isLoading}
              style={{ transformOrigin: "0 0 0" }}
              {...(isLoading ? { timeout: 1000 } : {})}
            >
              {<CircleIcon color="primary" />}
            </Grow>
            <Grow
              in={isLoading}
              style={{ transformOrigin: "0 0 0" }}
              {...(isLoading ? { timeout: 2000 } : {})}
            >
              {<CircleIcon color="error" />}
            </Grow>
            <Grow
              in={isLoading}
              style={{ transformOrigin: "0 0 0" }}
              {...(isLoading ? { timeout: 3000 } : {})}
            >
              {<CircleIcon color="info" />}
            </Grow>
            <Grow
              in={isLoading}
              style={{ transformOrigin: "0 0 0" }}
              {...(isLoading ? { timeout: 4000 } : {})}
            >
              {<CircleIcon color="success" />}
            </Grow>
          </div>
        ) : (
          homePageItems.map((card) => {
            return <CardItem key={card.id} {...card} />;
          })
        )}
      </div>
    </>
  );
}
