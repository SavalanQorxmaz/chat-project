import { createSlice } from "@reduxjs/toolkit";

import { localStorageObjectType } from "../types";


interface userInfoType {
    currentUser:{
        userName:string
        password: string
    }
}

let myProjectLocalStorage = localStorage.getItem('my-project')
let myObject:localStorageObjectType = {}


if(myProjectLocalStorage !== null){
    myObject = JSON.parse(myProjectLocalStorage)

    myObject.currentUser??={['userName']: '',['password']:''}
}
else {
    myObject = {...myObject, ['currentUser']:{['userName']: '',['password']:''}}
    // myObject.currentUser = {...myObject.currentUser,['userName']: '',['password']:''}
    
    localStorage.setItem('my-project', JSON.stringify(myObject))
}

const initialState:userInfoType = {

   currentUser: {
    userName: '',
    password: ''
   }
}

const userInfoSlice = createSlice({
    name: 'user-info',
    initialState,
    reducers:{
        setUser:(state, action)=>{
            state.currentUser.userName = action.payload.userName
            state.currentUser.password = action.payload.password
            myObject = {...myObject, ['currentUser']:{['userName']: action.payload.userName,['password']:action.payload.password}}
            localStorage.setItem('my-project', JSON.stringify(myObject))
        }
        
    }
})


export const {setUser} = userInfoSlice.actions

export const selectUser = (state:{userInfo:userInfoType})=>state.userInfo.currentUser