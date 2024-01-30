import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const OfferBanner = createAsyncThunk('offers/OfferBanner', async () => {
    try{
    const response = await axios.post("https://sylcon.howincloud.com/public/api/get-all-home-datas");
    const data =response.data.data.AllSliders;
    console.log(data, "Offer details");
    return data;
    }catch(error){
    throw Error("error fetching users");
    }   
  });


const OfferSlice = createSlice({
    name : "offers",
    initialState:{
        data: null,
        loading: false,
        error : null,
        OfferBanner:[],
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(OfferBanner.pending, (state) => {
          state.loading = true;
        })
        .addCase(OfferBanner.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
          state.OfferBanner=action.payload;
        })
        .addCase(OfferBanner.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },

})
export default OfferSlice.reducer