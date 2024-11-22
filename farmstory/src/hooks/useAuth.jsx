import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const userSlice = useSelector((state) => state.userSlice);
  const username = userSlice.username;
  const accessToken = userSlice.accessToken;

  return { navigate, accessToken, username };
};

export default useAuth;
