import React, { useContext } from "react";
import { AuthContext } from "../../context";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { user } = useContext(AuthContext);
    return user ? children : <Navigate to="/signin"/>;
}
export default ProtectedRoute;