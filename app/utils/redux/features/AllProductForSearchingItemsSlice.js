import { createSlice } from "@reduxjs/toolkit";

export const AllProductForSearchingItemsSlice = createSlice({
  name: "productsearch",
  initialState: {
    allProduct: [],
  },

  reducers: {
    setallProduct: (state, action) => {
      state.allProduct = action.payload;
    },
  },
});

//
export const selectallProduct = (state) => state.productsearch.allProduct;
export const { setallProduct } = AllProductForSearchingItemsSlice.actions;

export default AllProductForSearchingItemsSlice.reducer;
