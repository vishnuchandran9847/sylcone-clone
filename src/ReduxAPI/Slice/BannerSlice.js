import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Banners = createAsyncThunk("Featured/ProductItems", async () => {
  try {
    const response = await axios.post(
      "https://sylcon.howincloud.com/public/api/get-all-home-datas"
    );
    const data = response.data.data.AllFoodBanners;
    console.log(data, "banner details");
    return data;
  } catch (error) {
    throw Error("error fetching users");
  }
});

export const placeNewOrder = createAsyncThunk(
  "Featured/placeNewOrder",
  async (formData) => {
    try {
      console.log(formData,'formData')
      const data = formData;
      return data;
    } catch (error) {
      throw Error("error fetching users");
    }
  }
);

const BannerSlice = createSlice({
  name: "Banner",
  initialState: {
    data: null,
    newOrder:[],
    loading: false,
    error: null,
    Banners: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Banners.pending, (state) => {
        state.loading = true;
      })
      .addCase(Banners.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.Banners = action.payload;
      })
      .addCase(Banners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(placeNewOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(placeNewOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.newOrder = action.payload;
      })
      .addCase(placeNewOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default BannerSlice.reducer;
