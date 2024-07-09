import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/models";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {} as User,
    isAuth: false,
  },
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setAuth, setUser } = userSlice.actions;
export default userSlice.reducer;
