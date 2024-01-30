import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const DealSlider = createAsyncThunk('deal/DealSlider', async () => {
    try{
    const response = await axios.post("https://sylcon.howincloud.com/public/api/get-all-home-datas");
    const data =response.data.data.TodaysDeals;
    console.log(data, "Offer details");
    return data;
    }catch(error){
    throw Error("error fetching users");
    }   
  });




const DealSlice = createSlice({
    name: "deal",
    initialState:{
        data : null,
    loading : false,
    error: null,
    DealSlider: [],
    },
    

    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(DealSlider.pending, (state) => {
          state.loading = true;
        })
        .addCase(DealSlider.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
          state.DealSlider=action.payload;
        })
        .addCase(DealSlider.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },

})

export default DealSlice.reducer