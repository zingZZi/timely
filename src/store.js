import { configureStore, createSlice } from "@reduxjs/toolkit";

let userInfo = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    changeData(state, action) {
      return action.payload;
    },
  },
});
export let { changeData } = userInfo.actions;

export default configureStore({
  reducer: {
    userInfo: userInfo.reducer,
  },
});
