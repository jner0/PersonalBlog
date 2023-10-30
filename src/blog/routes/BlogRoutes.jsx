import { Navigate, Route, Routes } from "react-router-dom";
import { BiographyPage, BlogPage, CreatePost } from "../pages";
import { useEffect } from "react";

export const BlogRoutes = () => {
  return (
    <Routes>
      <Route path="/jose-nemecio-rodriguez" element={<BiographyPage />} />
      <Route path="/" element={<BlogPage />} />
      <Route path="/create-post" element={<CreatePost />} />

      <Route path="/*" element={<Navigate to="/jose-nemecio-rodriguez" />} />
    </Routes>
  );
};
