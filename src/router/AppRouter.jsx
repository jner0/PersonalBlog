import { Route, Routes } from "react-router-dom";
import { BlogRoutes } from "../blog/routes/BlogRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<BlogRoutes />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
    </Routes>
  );
};
