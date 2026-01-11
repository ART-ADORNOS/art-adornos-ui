import Login from "../../modules/auth/pages/Login";
import Register from "../../modules/auth/pages/Register";
import UpdateProfile from "../../modules/dashboard/pages/UpdateProfile";
import RegisterStartup from "../../modules/startups/pages/RegisterStartup";
import ProductDetail from "../../modules/products/pages/ProductDetail";
import CartOrdersList from "../../modules/carts/pages/CartOrdersList";
import OrderHistoryList from "../../modules/orderHistory/pages/OrderHistoryList";
import Dashboard from "../../modules/dashboard/pages/Dashboard";
import DashboardSeller from "../../modules/dashboard/pages/DashboardSeller";
import ProductList from "../../modules/products/pages/ProductList";
import ProductForm from "../../modules/products/pages/ProductForm";
import CategoryForm from "../../modules/categories/pages/CategoryForm";
import NotFoundPage from "../../shared/components/pages/NotFoundPage";
import LoginAdmin from "../../modules/auth/pages/LoginAdmin";
import LandingPage from "../../modules/landing/pages/LandingPage";


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
