import { Route, Routes } from "react-router-dom";
import { BlogRoutes } from "../blog/routes/BlogRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<BlogRoutes />} />
    </Routes>
  );
};
