import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({ children }) => {
    const isLoggedIn = useAuth();
    return isLoggedIn ? children : <Navigate to="/"/>
};

export default PrivateRoute;