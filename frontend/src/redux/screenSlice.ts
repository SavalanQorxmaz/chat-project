
import {createSlice} from '@reduxjs/toolkit'



interface screenType {
    screen: {
        screenSize:'xs' | 'sm' | 'md' | 'lg' | 'xl'
    }
}




const initialState = {
    screenSize: 'xl'
    
    }
    



const screenSlice = createSlice({
    name: 'screen',
    initialState,
    reducers: {
        setScreen: (state, action)=> {
            switch(true){
                case (action.payload <= 576): state.screenSize =  'xs';
                break;
             
                case ((action.payload > 576) && action.payload <= 768): state.screenSize = 'sm';
                break;
            
                case (action.payload > 768 && action.payload <= 992) : state.screenSize = 'md';
                break;
            
                case (action.payload > 992 && action.payload <= 1200) : state.screenSize = 'lg';
                break;
               
                default: state.screenSize = 'xl'
            }
        }
    }
})

export const {setScreen} = screenSlice.actions

export const selectScreenSize = (state:screenType) => state.screen.screenSize


export default screenSlice.reducer