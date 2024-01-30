import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FeaturedItems = createAsyncThunk('featured/FeaturedItems', async () => {
    try{
    const response = await axios.post("https://sylcon.howincloud.com/public/api/get-all-home-datas");
    const data =response.data.data.FeaturedProducts;
    console.log(data, "Featured details");
    return data;
    }catch(error){
    throw Error("error fetching users");
    }   
  });



const FeaturedSlice = createSlice({
    name : "featured",
    initialState: {
        data :null,
        loading : false,
        error : null, 
        FeaturedItems: [],
    },

    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(FeaturedItems.pending, (state) => {
          state.loading = true;
        })
        .addCase(FeaturedItems.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
          state.FeaturedItems=action.payload;
        })
        .addCase(FeaturedItems.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },


})
export default FeaturedSlice.reducer