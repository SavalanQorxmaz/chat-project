import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './themeSlice';
import screenReducer from './screenSlice'


export const store = configureStore({
    reducer: {
        theme: themeReducer,
        screen:screenReducer
    }
})