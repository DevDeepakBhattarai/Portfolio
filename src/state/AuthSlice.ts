import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
type AuthState = {
  user: User | undefined;
  isUserLoggedIn: boolean | undefined;
};

const initialState: AuthState = {
  user: undefined,
  isUserLoggedIn: undefined,
};
const AuthSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isUserLoggedIn = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { setIsLoggedIn, setUser } = AuthSlice.actions;
export default AuthSlice.reducer;
