// import { createStore,combineReducers } from 'redux';
// import reviewReducer from './reducers/reviewReducer'

// const rootReducer = combineReducers({
//     reviews: reviewReducer,

// })

// const store= createStore(rootReducer)

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import reviewReducer from "./slices/reviewSlice";

export const store = configureStore({
  reducer: {
    reviews: reviewReducer,
  },
});
