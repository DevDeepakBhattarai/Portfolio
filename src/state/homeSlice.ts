import { createSlice } from "@reduxjs/toolkit";
const homeSlice = createSlice({
  name: "home",
  initialState: {
    isLoading: true,
    isMobileNavBarOpen: false,
    isLogoutMenuOpen: false,
  },

  reducers: {
    doneLoading: (state) => {
      state.isLoading = false;
    },
    openMobileNavBar: (state) => {
      state.isMobileNavBarOpen = true;
    },
    closeMobileNavBar: (state) => {
      state.isMobileNavBarOpen = false;
    },
    setIsLogoutMenuOpen: (state, action) => {
      state.isLogoutMenuOpen = action.payload;
    },
  },
});
export const {
  doneLoading,
  setIsLogoutMenuOpen,
  openMobileNavBar,
  closeMobileNavBar,
} = homeSlice.actions;
export default homeSlice.reducer;
