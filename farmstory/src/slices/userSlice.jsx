import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const loadStateFromCookie = () => {
  const auth = JSON.parse(Cookies.get("auth") || null);

  const username = auth?.username;
  const role = auth?.role;
  const accessToken = auth?.accessToken;

  return { username, role, accessToken };
};

const initState = {
  username: null,
  role: null,
  accessToken: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: loadStateFromCookie() || initState, // 쿠키 값으로 리덕스 상태 초기화
  reducers: {
    login: (state, action) => {
      const data = action.payload;
      console.log("userSlice login data : " + JSON.stringify(data));

      // 리덕스 상태 초기화
      state.username = data.username;
      state.role = data.role;
      state.accessToken = data.accessToken;

      // 쿠키 저장 (영구 저장을 위해 쿠키 사용)
      Cookies.set("auth", JSON.stringify(data));
    },
    logout: (state) => {
      console.log("로그아웃...");

      // 상태 초기화
      state.username = null;
      state.role = null;
      state.accessToken = null;

      // 쿠키 삭제
      Cookies.remove("auth");
    },
    
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
