import { useNavigate, Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Badge from "@mui/material/Badge";
import { RootState, useAppSelector } from "./app/store";

function Layout() {
  const navigate = useNavigate();
  const { amountInCart } = useAppSelector((store: RootState) => store.cart);

  return (
    <>
      <nav className="header-container">
        <Button variant="text" onClick={() => navigate("home")}>
          <HomeIcon fontSize="large" />
        </Button>
        <Button variant="text" onClick={() => navigate("/cart")}>
          <Badge badgeContent={amountInCart} color="primary">
            <LocalMallIcon fontSize="large" />
          </Badge>
        </Button>
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;
