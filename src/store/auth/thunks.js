import { useDispatch } from "react-redux";
import { clearErrorMessage, onChecking, onLogout } from "./authSlice";
import { blogApi } from "../../services";

export const startLogin = ({ correo, password }) => {
  return async (dispatch) => {
    dispatch(onChecking());
    try {
      const { data } = await blogApi.post("/auth/login", { correo, password });
      console.log("data", data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onLogin({ name: data.nombre, uid: data.uid }));
    } catch (error) {
      dispatch(onLogout("Credenciales incorrectas"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };
};
