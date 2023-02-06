import { createSlice } from "@reduxjs/toolkit";

export const timePunchSlice = createSlice({
  name: "timepunch",
  initialState: {
    count: 0
  },
  reducers: {
  }
});

// Action creators are generated for each case reducer function
export const {} = timePunchSlice.actions;

export default timePunchSlice.reducer;