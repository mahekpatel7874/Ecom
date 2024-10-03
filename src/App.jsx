import { Route, Routes } from "react-router-dom";
// import Splash from "./Pages/splash";

// common
import LogIn from "./Pages/logIn/index";
import ForgotPassword from "./Pages/forgotPassword/index";
import OrderDetails from "./Pages/orderDetails/index";
import OrderList from "./Pages/orderList/index";

import Payment from "./Pages/payment/index";

// client
import SignUp from "./Pages/Client/signUp/index";
import Dashboard from "./Pages/Client/dashboard/index";
import Profile from "./Pages/Client/profile/index";
import ProductList from "./Pages/Client/productList/index";
import ProductDetails from "./Pages/Client/productDetails/index";
import Cart from "./Pages/Client/cart/index";
import OrderConfirm from "./Pages/Client/orderConfirm/index";
import WishList from "./Pages/Client/wishlist/index.jsx";

// Admin
import AdminDashboard from "./Pages/Admin/dashboard/index";
import AdminCategories from "./Pages/Admin/categories/index";
import AdminProductList from "./Pages/Admin/productList/index";
import AdminProductDetails from "./Pages/Admin/productDetails/index";
import AdminProfile from "./Pages/Admin/profile/index";

export default function App() {
  return (
    <Routes classname={"w-full"}>
      <Route path="/payment" exact element={<Payment />} />

      {/*  Client */}
      <Route path="/" exact element={<LogIn />} />
      <Route path="/login" exact element={<LogIn />} />
      <Route path="/register" exact element={<SignUp />} />
      <Route path="/dashboard" exact element={<Dashboard />} />
      <Route path="/home" exact element={<Dashboard />} />
      <Route path="/profile" exact element={<Profile />} />
      <Route path="/forgotpassword" exact element={<ForgotPassword />} />
      <Route path="/productlist" exact element={<ProductList />} />
      <Route path="/productdetails" exact element={<ProductDetails />} />
      <Route path="/cart" exact element={<Cart />} />
      <Route path="/orderconfirm" exact element={<OrderConfirm />} />
      <Route path="/orderdetails" exact element={<OrderDetails />} />
      <Route path="/orderlist" exact element={<OrderList />} />
      <Route path="/wishlist" exact element={<WishList />} />

      {/* Admin */}
      <Route path="/admin" exact element={<LogIn />} />
      <Route path="/admin/login" exact element={<LogIn />} />
      <Route path="/admin/dashboard" exact element={<AdminDashboard />} />
      <Route path="/admin/categories" exact element={<AdminCategories />} />
      <Route path="/admin/home" exact element={<AdminDashboard />} />
      <Route path="/admin/profile" exact element={<AdminProfile />} />
      <Route path="/admin/forgotpassword" exact element={<ForgotPassword />} />
      <Route path="/admin/productlist" exact element={<AdminProductList />} />
      <Route
        path="/admin/productdetails"
        exact
        element={<AdminProductDetails />}
      />
      {/*<Route path="/admin/cart" exact element={<Cart />} />*/}
      {/*<Route path="/admin/orderconfirm" exact element={<OrderConfirm />} />*/}
      <Route path="/admin/orderdetails" exact element={<OrderDetails />} />
      <Route path="/admin/orderlist" exact element={<OrderList />} />
      {/*<Route path="/admin/wishlist" exact element={<WishList />} />*/}
    </Routes>
  );
}
