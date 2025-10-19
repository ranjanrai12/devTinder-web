import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connections",
  initialState: [],
  reducers: {
    addConnection: (state, action) => {
      return action.payload;
    },
    removeConnection: () => null
  },
});

export const { addConnection } = connectionSlice.actions;

export default connectionSlice.reducer;
