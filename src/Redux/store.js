import { configureStore } from "@reduxjs/toolkit";
import sliceUI from "./slices/sliceUI";

const store = configureStore({
  reducer: {
    ui: sliceUI,
  },
});

export default store;
