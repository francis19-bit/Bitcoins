import { createSlice } from "@reduxjs/toolkit";

export const MobilePhoneSlice = createSlice({
  name: "MobileData",
  initialState: {
    
  // MobilePhones
    MobileApple: {},
    MobileAiEnabled: {},
    MobileItel: {},
    MobileInfinix: {},
    MobileTcl: {},
    MobileHuawei: {},
    MobileSamsung: {},
    MobileNokia: {},
    MobileTecno: {},
    MobileXtigi: {},
    MobileXioami: {},
    MobileOale: {},
    MobileAlcatel: {},
    MobileTablet: {},
  },
  
  reducers: {
   

    // Mobiles
    setMobileAiEnabled: (state, action) => {
      state.MobileAiEnabled = action.payload;
    },
    setMobileApple: (state, action) => {
      state.MobileApple = action.payload;
    },
    setMobileItel: (state, action) => {
      state.MobileItel = action.payload;
    },
    setMobileInfinix: (state, action) => {
      state.MobileInfinix = action.payload;
    },
    setMobileTcl: (state, action) => {
      state.MobileTcl = action.payload;
    },
    setMobileHuawei: (state, action) => {
      state.MobileHuawei = action.payload;
    },
    setMobileSamsung: (state, action) => {
      state.MobileSamsung = action.payload;
    },
    setMobileNokia: (state, action) => {
      state.MobileNokia = action.payload;
    },
    setMobileTecno: (state, action) => {
      state.MobileTecno = action.payload;
    },
    setMobileXtigi: (state, action) => {
      state.MobileXtigi = action.payload;
    },
    setMobileXioami: (state, action) => {
      state.MobileXioami = action.payload;
    },
    setMobileOale: (state, action) => {
      state.MobileOale = action.payload;
    },
    setMobileAlcatel: (state, action) => {
      state.MobileAlcatel = action.payload;
    },
    setMobileTablet: (state, action) => {
      state.MobileTablet = action.payload;
    },

    
  },
});


// Mobile
export const selectMobileApple = (state) => state.ItemData.MobileApple;
export const selectMobileAiEnabled = (state) => state.ItemData.MobileAiEnabled;
export const selectMobileItel = (state) => state.ItemData.MobileItel;
export const selectMobileInfinix = (state) => state.ItemData.MobileInfinix;
export const selectMobileTcl = (state) => state.ItemData.MobileTcl;
export const selectMobileHuawei = (state) => state.ItemData.MobileHuawei;
export const selectMobileSamsung = (state) => state.ItemData.MobileSamsung;
export const selectMobileNokia = (state) => state.ItemData.MobileNokia;
export const selectMobileTecno = (state) => state.ItemData.MobileTecno;
export const selectMobileXtigi = (state) => state.ItemData.MobileXtigi;
export const selectMobileXioami = (state) => state.ItemData.MobileXioami;
export const selectMobileOale = (state) => state.ItemData.MobileOale;
export const selectMobileAlcatel = (state) => state.ItemData.MobileAlcatel;
export const selectMobileTablet = (state) => state.ItemData.MobileTablet;

export const {
  
} = MobilePhoneSlice.actions;

export default MobilePhoneSlice.reducer;
