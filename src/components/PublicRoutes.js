import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PublicRoute = ({ children }) => {
    const isLoggedIn = useAuth();
    return !isLoggedIn ? children : <Navigate to="/inbox"/>
};

export default PublicRoute;