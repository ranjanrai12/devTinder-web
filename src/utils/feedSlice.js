import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    removeAllFeed: () => null,
    removeUserFromFeed: (state, action) => {
      const remainingFeed = state.filter(
        (connection) => connection._id !== action.payload
      );
      return remainingFeed;
    },
  },
});

export const { addFeed, removeUserFromFeed, removeAllFeed } = feedSlice.actions;
export default feedSlice.reducer;
