import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const PopularSlider = createAsyncThunk('popular/PopularSlider', async () => {
    try{
    const response = await axios.post("https://sylcon.howincloud.com/public/api/get-all-home-datas");
    const data =response.data.data.PopularProducts;
    console.log(data, "popular details");
    return data;
    }catch(error){
    throw Error("error fetching users");
    }   
  });




const PopularSlice=  createSlice({
    name : "popular",
    initialState :{
        data: null,
        loading : false,
        error : null,
        PopularSlider:[],
    },

    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(PopularSlider.pending, (state) => {
          state.loading = true;
        })
        .addCase(PopularSlider.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
          state.PopularSlider=action.payload;
        })
        .addCase(PopularSlider.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },

})
export default PopularSlice.reducer
