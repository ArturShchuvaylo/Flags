import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    search:'',
    region:'',
}

export const controlsSlice = createSlice({
        name: 'controls',
        initialState,
        reducers:{
            setSearch:(state,action)=>{
                state.search=action.payload
            },
            setSelect:(state,action)=>{
                state.region=action.payload
            },
            clearControls:()=>initialState,

        }
}); 

export const {setSearch,setSelect,clearControls} = controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;



export const selectSearch = (state)=>{
    return state.controls.search
}
export const selectSelect = (state)=>{
    return state.controls.region
}
export const selectControls = (state)=>{
    return state.controls
}


