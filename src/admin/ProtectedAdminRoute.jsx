import { Navigate } from "react-router-dom";

export default function ProtectedAdminRoute({ children }) {
  const token = localStorage.getItem("token");

  // If not logged in → redirect to admin login
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  // If logged in → allow access
  return children;
}
