import { configureStore } from "@reduxjs/toolkit";
import timePunchReducer from "./timePunch";

export default configureStore({
  reducer: {
    timepunch : timePunchReducer
  }
});