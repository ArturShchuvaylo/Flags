import axios from "axios";
import * as api from '../config'
import { configureStore} from "@reduxjs/toolkit";
import { themeReducer } from "./themeSlice/themeSlice";
import { controlsReducer } from "./controls/controlsSlice";
import { countriesReducer } from "./contriesSlice/contriesSlice";
import { detailsReducer } from "./detailsSlice/detailsSlice";



export const store = configureStore({
  reducer:{
       theme:themeReducer,
       controls:controlsReducer,
       countries:countriesReducer,
       details:detailsReducer,
  },
  devTools:true,

  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    thunk:{
      extraArgument:{
        client: axios,
        api,
      },
    },
    serializableCheck:false,
  }),
});

