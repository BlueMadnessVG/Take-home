import { Navigate, Outlet } from "react-router-dom"
import { PublicRoutes } from "../router"

export const AuthGuard = () => {
    const userState = { token: null /* "hero a token" */ }
    return userState.token ? (
        <Outlet />
    ) : (
        <Navigate replace to={PublicRoutes.HOME.route} />
    )
}