import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const SearchProduct = createAsyncThunk('search/SearchProduct', async (postData) => {
    try{
    const response = await axios.post("https://sylcon.howincloud.com/public/api/get-all-search-datas",postData);
    const data =response.data; 
    return data;
    }catch(error){
    throw Error("error fetching users");
    }
  });


const SearchSlice = createSlice({
    name: 'search',
    initialState: {
        searches: [],
        searcheditems: [],
        isLoading: true
    },
    reducers: {
        handleSearchJobs: (state, action) => {
            state.searcheditems = [];
            state.searcheditems.push(action.payload)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(SearchProduct.fulfilled, (state, action) => {
            state.searches = action.payload;
            state.searcheditems = action.payload;
            state.isLoading = false;
        })
        builder.addCase(SearchProduct.pending, (state, action) => {
            state.isLoading = true;
        })
    },
});
export default SearchSlice.reducer;
export const { handleSearchJobs } = SearchSlice.actions;