import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  modalVisability: false,
};

const SliceUI = createSlice({
  name: "UI",
  initialState,
  reducers: {
    changeModalVisability: (state, action) => {
      state.modalVisability = action.payload;
    },
  },
});

export const { changeModalVisability } = SliceUI.actions;

export default SliceUI.reducer;
