import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const CategoriesProduct = createAsyncThunk('Category/Categories', async () => {
    try{
    const response = await axios.post("https://sylcon.howincloud.com/public/api/get-all-home-datas");
    const data =response.data.data.AllCategories;
    console.log(data, "category details");
    return data;
    }catch(error){
    throw Error("error fetching users");
    }   
  });



const CategorySlice= createSlice({
    name : "Category",
    initialState:{
        data: null,
        loading : false,
        error :null,
        CategoriesProduct:[],
    },
    reducers: {},
      extraReducers: (builder) => {
        builder
          .addCase(CategoriesProduct.pending, (state) => {
            state.loading = true;
          })
          .addCase(CategoriesProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.CategoriesProduct=action.payload;
          })
          .addCase(CategoriesProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
      },

})
 export default CategorySlice.reducer