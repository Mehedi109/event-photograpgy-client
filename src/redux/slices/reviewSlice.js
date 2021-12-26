import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// First, create the thunk
export const fetchReviews = createAsyncThunk(
  "review/fetchReviews",
  async () => {
    const response = await fetch(
      "https://agile-sierra-38761.herokuapp.com/categories"
    ).then((res) => res.json());
    return response.data;
  }
);

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    reviewList: [],
  },
  reducers: {
    addReview: (state, { payload }) => {
      state.reviewList.push(payload);
    },
    decrement: (state, { payload }) => {
      state.reviewList.push(payload);
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchReviews.fulfilled, (state, action) => {
      // Add user to the state array
      state.reviewList = action.payload;
    });
  },
});

export const { addReview } = reviewSlice.actions;

export default reviewSlice.reducer;
