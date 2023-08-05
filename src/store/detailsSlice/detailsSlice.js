import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCountryByName = createAsyncThunk(
    'loadCountryByName',
    (name,{extra:{client,api}})=>{
        return client.get(api.searchByCountry(name))
    }
)
export const loadNeighborsCountries  = createAsyncThunk(
    'loadNeighborsCountries',
    (border,{extra:{client,api}})=>{
        return client.get(api.filterByCode (border))
    }
)

const initialState = {
   currentCountry: null,
   status:'idle',
   error: null, 
   neighbors:[],
}

export const detailsSlice = createSlice({
    name:'details',
    initialState,
    reducers:{
        clearDetails:()=>initialState,
    },
    extraReducers:(builder)=>{
        builder
        .addCase(loadCountryByName.pending,(state, action)=>{
            state.status='loading';
        })
        .addCase(loadCountryByName.fulfilled,(state, action)=>{
            state.status='idle';
            state.currentCountry=action.payload.data[0];
        })
        .addCase(loadCountryByName.rejected,(state, action)=>{
            state.status='rejected';
            state.error=action.payload;
        })
        .addCase(loadNeighborsCountries.fulfilled,(state, action)=>{
            state.neighbors = action.payload.data.map(elem=>elem.name)
            
        })
    }
})

export const {clearDetails} = detailsSlice.actions;
export const detailsReducer =detailsSlice.reducer;



export const selectCurrentCountry=(state)=>state.details.currentCountry;
export const selectDetails = (state)=>state.details;
export const selectNeighbors = (state)=>state.details.neighbors;