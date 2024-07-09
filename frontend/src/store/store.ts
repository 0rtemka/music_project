import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import curUserReviewReducer from "./reducers/curUserReviewReducer";

export const store = configureStore({
    reducer: {
        user: userReducer,
        curUserReview: curUserReviewReducer,
    }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']