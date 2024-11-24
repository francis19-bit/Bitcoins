import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "DataRetrieval",
  initialState: {
    CartDataRetrieval: [],
    Notification: [],
    NotificationRetrievals: {},
    // deleteNotification: [],
  },

  reducers: {
    setCartDataRetrieval: (state, action) => {
      state.CartDataRetrieval = action.payload;
    },
    setnotification: (state, action) => {
      state.Notification = action.payload;
    },
    setNotificationRetrievals: (state, action) => {
      state.NotificationRetrievals = action.payload;
    },
    // setdeleteNotification: (state, action) => {
    //   state.deleteNotification = action.payload;
    // },
    setdeleteNotification: (state, action) => {
      state.NotificationRetrievals = state.NotificationRetrievals.filter(
        (notification) => notification.id !== action.payload
      );
    },
  },
});

//
export const selectCartDataRetrieval = (state) =>
  state.DataRetrieval.CartDataRetrieval;
export const selectnotification = (state) => state.DataRetrieval.Notification;
export const selectdeleteNotification = (state) =>
  state.DataRetrieval.deleteNotification;
export const selectNotificationRetrievals = (state) =>
  state.DataRetrieval.NotificationRetrievals;

export const {
  setCartDataRetrieval,
  setnotification,
  setNotificationRetrievals,
  setdeleteNotification,
} = CartSlice.actions;

export default CartSlice.reducer;
