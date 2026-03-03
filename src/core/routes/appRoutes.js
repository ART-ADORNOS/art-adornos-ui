import USER_TYPE from "../constants/user/userType";
import UpdateProfile from "../../modules/dashboard/pages/UpdateProfile";
import RegisterStartup from "../../modules/startups/pages/RegisterStartup";
import Dashboard from "../../modules/dashboard/pages/Dashboard";
import LandingPage from "../../modules/landing/pages/LandingPage";
import Login from "../../modules/auth/pages/Login";
import Register from "../../modules/auth/pages/Register";
import DashboardSeller from "../../modules/dashboard/pages/DashboardSeller";
import ProductList from "../../modules/products/pages/ProductList";
import LoginAdmin from "../../modules/auth/pages/LoginAdmin";
import NotFoundPage from "../../shared/components/pages/NotFoundPage";

export const fallbackRoute = {
    path: "*",
    element: <NotFoundPage/>,
};

export const publicRoutes = [
    {path: "/", element: <LandingPage/>},
    {path: "/login", element: <Login/>},
    {path: "/admin", element: <LoginAdmin/>},
    {path: "/register", element: <Register/>},
];

export const protectedRoutes = [
    {
        path: "/edit-profile",
        element: <UpdateProfile/>,
        roles: [USER_TYPE.USER, USER_TYPE.SELLER],
    },
    {
        path: "/register-startup",
        element: <RegisterStartup/>,
        roles: [USER_TYPE.USER],
    },
    {
        path: "/dashboard",
        element: <Dashboard/>,
        roles: [USER_TYPE.USER],
    },
    {
        path: "/dashboard-seller",
        element: <DashboardSeller/>,
        roles: [USER_TYPE.SELLER],
    },
    {
        path: "/product-list",
        element: <ProductList/>,
        roles: [USER_TYPE.SELLER],
    },
];