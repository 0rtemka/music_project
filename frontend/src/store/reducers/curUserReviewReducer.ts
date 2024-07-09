import { createSlice } from "@reduxjs/toolkit";
import { Review } from "../../models/models";

export const curUserReviewSlice = createSlice({
  name: "curUserReview",
  initialState: {
    review: {} as Review
  },
  reducers: {
    setReview: (state, action) => {
      state.review = action.payload;
    },
  },
});

export const { setReview } = curUserReviewSlice.actions;
export default curUserReviewSlice.reducer;