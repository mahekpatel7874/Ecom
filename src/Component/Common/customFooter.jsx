import { useNavigate } from "react-router-dom";
import Cart from "../../assets/Cart.svg";
import Category from "../../assets/category.svg";
import Home from "../../assets/Home.svg";
import Heart from "../../assets/Heart.svg";
import OrderList from "../../assets/Orders.svg";
import AdminOrderList from "../../assets/adminOrderList.svg";
export default function CustomFooter() {
  const navigate = useNavigate();
  const isAdminDashboard =
    window.location.href.indexOf("/admin/dashboard") > -1;
  const isAdmin = window.location.href.indexOf("/admin") > -1;
  return (
    <div
      className={
        "w-full flex justify-between items-center h-[70px] bg-[#fff] py-4 px-14 md:hidden"
      }
    >
      <img
        src={Home}
        width={20}
        height={20}
        alt={"No Image"}
        onClick={() => navigate(isAdmin ? "/admin/dashboard" : "/dashboard")}
        className={"cursor-pointer"}
      />
      {isAdminDashboard ? (
        <img
          src={Category}
          width={20}
          height={20}
          alt={"No Image"}
          onClick={() => navigate("/admin/categories")}
          className={"cursor-pointer"}
        />
      ) : (
        <>
          <img
            src={Heart}
            width={20}
            height={20}
            alt={"No Image"}
            onClick={() => navigate(isAdmin ? "/admin/wishlist" : "/wishlist")}
            className={"cursor-pointer"}
          />
          <img
            src={Cart}
            width={20}
            height={20}
            alt={"No Image"}
            onClick={() => navigate(isAdmin ? "/admin/cart" : "/cart")}
            className={"cursor-pointer"}
          />
        </>
      )}

      <img
        src={isAdmin ? AdminOrderList : OrderList}
        width={20}
        height={20}
        alt={"No Image"}
        onClick={() => navigate(isAdmin ? "/admin/orderlist" : "/orderlist")}
        className={"cursor-pointer"}
      />
    </div>
  );
}
