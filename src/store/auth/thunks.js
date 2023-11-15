import { clearErrorMessage, onChecking, onLogin, onLogout } from "./authSlice";
import { blogApi } from "../../services";

export const startLogin = ({ correo, password }) => {
  return async (dispatch) => {
    dispatch(onChecking());
    try {
      const { data } = await blogApi.post("/auth/login", {
        correo,
        password,
      });
      console.log("data", data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onLogin({ name: data.usuario.nombre, uid: data.usuario._id }));
    } catch (error) {
      dispatch(onLogout("Credenciales incorrectas"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };
};

export const checkAuthToken = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout());

    try {
      console.log("aqui");
      const { data } = await blogApi.get("/auth/renew");
      console.log("data", data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onLogin({ name: data.nombre, uid: data.uid }));
    } catch (error) {
      console.log("aqui2");
      localStorage.clear();
      dispatch(onLogout());
    }
  };
};
