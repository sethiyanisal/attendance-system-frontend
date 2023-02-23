import { createSlice } from "@reduxjs/toolkit";

export const timePunchSlice = createSlice({
  name: "timepunch",
  initialState: {
    isPunched: false
  },
  reducers: {
    punchInStatus: (state) => {
      state.isPunched = true;
    },

    punchOutStatus: (state) => {
      state.isPunched = false;
    }
  }
});

// Action creators are generated for each case reducer function
export const {punchInStatus, punchOutStatus} = timePunchSlice.actions;

export default timePunchSlice.reducer;