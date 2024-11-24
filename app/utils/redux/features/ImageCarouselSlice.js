import { createSlice } from "@reduxjs/toolkit";

export const ImageCarouselSlice = createSlice({
  name: "images",
  initialState: {
    ImagesData: [],
  },

  reducers: {
    setImagesData: (state, action) => {
      state.ImagesData = action.payload;
    },
  },
});

//
export const selectImagesData = (state) => state.images.ImagesData;
export const { setImagesData } = ImageCarouselSlice.actions;

export default ImageCarouselSlice.reducer;
