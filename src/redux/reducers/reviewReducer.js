const initialState = {
  reviewList: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_REVIEW": {
      const newState = {
        ...state,
        reviewList: [...state.reviewList, action.payload],
      };
      return newState;
    }
    default:
      return state;
  }
};

export default bookReducer;
