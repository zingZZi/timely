import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeData } from "../store";
import { getUserInfo } from "../api/AuthApi";
import { useNavigate } from "react-router-dom";

export const useAuthInit = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const init = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) return;
      try {
        const userInfo = await getUserInfo();
        dispatch(changeData(userInfo.data));
      } catch (error) {
        if (error.response?.status === 401) {
          localStorage.removeItem("accessToken");
          dispatch(changeData(null));
          navigate("/auth/signin");
        }
      }
    };
    init();
  }, []);
};
