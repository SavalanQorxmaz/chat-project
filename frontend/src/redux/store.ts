import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './themeSlice';
import screenReducer from './screenSlice'
import idReducer from './chatSlice'
import userInfoReducer from './userSlice'


export const store = configureStore({
    reducer: {
        theme: themeReducer,
        screen:screenReducer,
        id: idReducer,
        userInfo: userInfoReducer
    }
})