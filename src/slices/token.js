import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
  userID: null,
  username: null,
  email: null,
  auth: false,
  token: null,
};

// A slice for token with our reducers
const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setSessionSuccess: (state, { payload }) => {
      state.userID = payload.sub;
      state.username = payload.username;
      state.email = payload.email;
      state.auth = true;
      state.token = localStorage.getItem("accessToken");
    },
    setSessionFailure: (state) => {
      state.userID = null;
      state.username = null;
      state.email = null;
      state.auth = false;
      state.token = null;
    },
  },
});

// Actions generated from the slice
export const { setSessionSuccess, setSessionFailure } = tokenSlice.actions;

// A selector
export const tokenSelector = (state) => state.token;

// The reducer
export default tokenSlice.reducer;

// Asynchronous thunk action
export const fetchToken = async (user) => {
  try {
    const login = await axios.post("/api/login", user);

    const payload = login.data;
    localStorage.setItem("accessToken", payload.accessToken);

    window.location.href = "/dashboard";
  } catch {
    window.location.reload();
  }
};

export const endSession = () => {
  return async (dispatch) => {
    localStorage.removeItem("accessToken");
    await dispatch(setSessionFailure());
  };
};

export const maintainSession = () => {
  return async (dispatch) => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      await dispatch(setSessionSuccess(accessToken));
    } catch (error) {
      await dispatch(endSession());
    }
  };
};
