import { useSelector } from "react-redux";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);

  return {
    status,
    errorMessage,
    user,
  };
};
