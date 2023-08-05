import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const loadAllCountries = createAsyncThunk('loadCountries',
    async ( _,{extra:{client,api}} ) => client.get(api.ALL_COUNTRIES)

);


const initialState={
    status: 'idle',
    error:null,
    list:[]
}

export const countriesSlice = createSlice({
    name:'countries',
    initialState,
    reducers:{ },
   extraReducers:(builder)=>{
    builder
    .addCase(loadAllCountries.pending, (state)=>{
        state.status = 'loading';
        state.error = null;
    })
    .addCase(loadAllCountries.fulfilled, (state, action)=>{
        state.list = action.payload.data;
        state.status = 'received';
    })
    .addCase(loadAllCountries.rejected, (state, action)=>{
        state.status='rejected';
        state.error=action.payload||action.meta.error; 
    })
   }
}) 

//selectores 

export const selectCountriesInfo=(state)=>({
    status:state.countries.status,
    error:state.countries.error,
    qty:state.countries.list.length,
})

export const selectAllCountries=(state)=>state.countries.list;
 
export const selectVisiableCountries=(state,{search='', region=''})=>{
return state.countries.list.filter(country => {
        return  country.name.toLowerCase().includes(search.toLowerCase())&&country.region.includes(region)
        }
    )
}


export const countriesReducer = countriesSlice.reducer;