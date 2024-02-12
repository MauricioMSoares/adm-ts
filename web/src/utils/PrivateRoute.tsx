import { Navigate, Outlet } from "react-router-dom"
import authStore from "../stores/auth.store"

const PrivateRoute = () => {
  const {isAuthenticated} = authStore

  return (
    isAuthenticated
    ? <Outlet />
    : <Navigate to="/login" />
  )
}

export default PrivateRoute