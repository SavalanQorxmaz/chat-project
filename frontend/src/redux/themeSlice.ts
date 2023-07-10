import {createSlice} from '@reduxjs/toolkit'


interface themeType {
    
    theme: {
        mode: 'dark' | 'light'
    }
    
}
interface myObjectType {
    theme?: 'light' | 'dark'
}


let myProjectLocalStorage = localStorage.getItem('my-project')
let myObject:myObjectType = {}

if(myProjectLocalStorage !== null){
    myObject = JSON.parse(myProjectLocalStorage)

}
else {
    myObject.theme = 'light'
    
    localStorage.setItem('my-project', JSON.stringify(myObject))
}

const initialState = {
    mode: myObject.theme
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action) =>{

            myObject.theme = action.payload
            state.mode = action.payload
            localStorage.setItem('my-project', JSON.stringify(myObject))
        }
    }
})

export const {setTheme} = themeSlice.actions

export const selecTheme = (state:themeType) => state.theme.mode


export default themeSlice.reducer