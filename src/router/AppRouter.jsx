import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { BlogRoutes } from "../blog/routes/BlogRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useAuthStore } from "../hooks";
import { checkAuthToken } from "../store";
import { useDispatch } from "react-redux";

export const AppRouter = () => {
  const { status } = useAuthStore();
  const dispatch = useDispatch();
  console.log("status", status);

  useEffect(() => {
    dispatch(checkAuthToken());
  }, []);

  return (
    <Routes>
      {status === "not-authenticated" ? (
        <>
          <Route path="/*" element={<BlogRoutes />} />
          <Route path="/auth/*" element={<AuthRoutes />} />
        </>
      ) : (
        <>
          <Route path="/*" element={<BlogRoutes />} />
        </>
      )}
      {/* <Route path="/*" element={<BlogRoutes />} />
      <Route path="/auth/*" element={<AuthRoutes />} /> */}
    </Routes>
  );
};
