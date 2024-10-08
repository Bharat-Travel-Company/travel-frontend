import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentDataItems: [],
  startIndex: 0,
  endIndex: 0,
  loading: true,
  isLoggedIn: false, // New flag for login status
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getCurrentItems: (state, action) => {
      state.currentDataItems = action.payload;
    },
    setIsLoading: (state, action) => {
      state.loading = action.payload;
    },
    getStartIndex: (state, action) => {
      state.startIndex = action.payload;
    },
    getEndIndex: (state, action) => {
      state.endIndex = action.payload;
    },
    setIsLoggedIn: (state, action) => { // Action to update login status
      state.isLoggedIn = action.payload;
    },
  },
});

export default dataSlice.reducer;

export const dataStore = (state) => state.data;

export const {
  getCurrentItems,
  getStartIndex,
  getEndIndex,
  setIsLoading,
  setIsLoggedIn, // Export action to set login status
} = dataSlice.actions;
