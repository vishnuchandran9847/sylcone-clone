import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const ElectronicSlider = createAsyncThunk('electronic/ElectronicSlider', async () => {
    try{
    const response = await axios.post("https://sylcon.howincloud.com/public/api/get-all-home-datas");
    const data =response.data.data.PopularBrands;
    console.log(data, "Electronic details");
    return data;
    }catch(error){
    throw Error("error fetching users");
    }   
  });


const ElectronicSlice= createSlice({
    name : "electronic",
    initialState:{
        data: null,
        error : null,
        loading : false,
        ElectronicSlider:[],
    },

    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(ElectronicSlider.pending, (state) => {
          state.loading = true;
        })
        .addCase(ElectronicSlider.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
          state.ElectronicSlider=action.payload;
        })
        .addCase(ElectronicSlider.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
})

export default ElectronicSlice.reducer