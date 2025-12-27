import Login from "../../../modules/auth/pages/login/Login";
import Register from "../../../modules/auth/pages/register/register";
import UpdateProfile from "../../../modules/dashboard/pages/dashboard/updateProfile";
import RegisterStartup from "../../../modules/startup/pages/registerStartup";
import ProductDetail from "../../../modules/products/pages/ProductDetail";
import CartOrdersList from "../../../modules/cart/pages/cartOrdersList";
import OrderHistoryList from "../../../modules/orderHistory/pages/orderHistoryList";
import Dashboard from "../../../modules/dashboard/pages/dashboard/Dashboard";
import DashboardSeller from "../../../modules/dashboard/pages/userSeller/DashboardSeller";
import ProductList from "../../../modules/products/pages/ProductList";
import ProductForm from "../../../modules/products/pages/ProductForm";
import CategoryForm from "../../../modules/category/pages/CategoryForm";
import NotFoundPage from "../../../shared/components/pages/NotFoundPage";
import LoginAdmin from "../../../modules/auth/pages/login/LoginAdmin";
import LandingPage from "../../../modules/landing/pages/LandingPage";


export const publicRoutes = [
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <Login /> },
  { path: "/admin", element: <LoginAdmin /> },
  { path: "/register", element: <Register /> },
];

export const protectedRoutes = [
  { path: "/edit-profile", element: <UpdateProfile /> },
  { path: "/register-startup", element: <RegisterStartup /> },
  { path: "/product-detail/:id", element: <ProductDetail /> },
  { path: "/cart-orders-list", element: <CartOrdersList /> },
  { path: "/history-orders", element: <OrderHistoryList /> },
];

export const protectedStartupRoutes = [
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/dashboard-seller", element: <DashboardSeller /> },
  { path: "/product-list", element: <ProductList /> },
  { path: "/register-product", element: <ProductForm /> },
  { path: "/register-category", element: <CategoryForm /> },
];

export const fallbackRoute = {
  path: "*",
  element: <NotFoundPage />,
};
