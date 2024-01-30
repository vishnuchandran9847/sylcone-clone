import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const DiscoverSlider = createAsyncThunk('Discover/DiscoverSlider', async () => {
    try{
    const response = await axios.post("https://sylcon.howincloud.com/public/api/get-all-home-datas");
    const data =response.data.data.DiscoverItems;
    console.log(data, "discover product details");
    return data;
    }catch(error){
    throw Error("error fetching users");
    }   
  });


const DiscoverProductSlice = createSlice({
    name : "Discover",
    initialState:{
        data: null,
        loading : false,
        error : null,
        DiscoverSlider: [],

    },

    reducers: {},
      extraReducers: (builder) => {
        builder
          .addCase(DiscoverSlider.pending, (state) => {
            state.loading = true;
          })
          .addCase(DiscoverSlider.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.DiscoverSlider=action.payload;
          })
          .addCase(DiscoverSlider.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
      },

})
export default DiscoverProductSlice.reducer