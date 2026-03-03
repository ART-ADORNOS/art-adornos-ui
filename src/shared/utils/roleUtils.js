import ROUTES from "../../core/routes/routes";
import USER_TYPE from "../../core/constants/user/userType";

export const getDashboardRoute = (user) => {
    if (!user) return ROUTES.LOGIN;

    switch (user.role) {
        case USER_TYPE.SELLER:
            return ROUTES.ADMIN;
        case USER_TYPE.USER:
            return ROUTES.DASHBOARD;
        default:
            return ROUTES.LOGIN;
    }
};