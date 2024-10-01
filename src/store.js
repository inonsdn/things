import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "./appState/AppSlice";

export default configureStore({
    reducer: {
        appReducer: AppReducer
    },
})
