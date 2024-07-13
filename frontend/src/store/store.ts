import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import curUserReviewReducer from "./reducers/curUserReviewReducer";
import searchReducer from "./reducers/searchReducer";

export const store = configureStore({
    reducer: {
        user: userReducer,
        curUserReview: curUserReviewReducer,
        search: searchReducer,
    }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']