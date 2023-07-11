import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './themeSlice';
import screenReducer from './screenSlice'
import idReducer from './chatSlice'


export const store = configureStore({
    reducer: {
        theme: themeReducer,
        screen:screenReducer,
        id: idReducer
    }
})