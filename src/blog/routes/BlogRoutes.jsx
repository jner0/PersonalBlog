import { Navigate, Route, Routes } from "react-router-dom";
import { BlogPage } from "../pages/BlogPage";

export const BlogRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BlogPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
