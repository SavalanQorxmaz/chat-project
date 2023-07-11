
import { createSlice } from "@reduxjs/toolkit";
import { localStorageObjectType } from "../types";


interface idType {
    id: {
        currentID: string
    }
}





let myProjectLocalStorage = localStorage.getItem('my-project')
let myObject:localStorageObjectType = {}

if(myProjectLocalStorage !== null){
    myObject = JSON.parse(myProjectLocalStorage)
   if(myObject.id === undefined){
    myObject = {...myObject, ['id']: ''}
   }

}
else {
    myObject = {...myObject, ['id']: ''}
    
    localStorage.setItem('my-project', JSON.stringify(myObject))
}

console.log(myObject.id)

const initialState = {
    currentID:myObject.id
}

const idSlice = createSlice({
    name: 'myID',
    initialState,
    reducers:{
        setID: (state, action) =>{

            myObject.id = action.payload
            state.currentID = action.payload
            localStorage.setItem('my-project', JSON.stringify(myObject))
           
        }
    }
})

export const {setID} = idSlice.actions

export const selectID = (state:idType) => state.id.currentID


export default idSlice.reducer