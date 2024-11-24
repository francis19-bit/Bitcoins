import { createSlice } from "@reduxjs/toolkit";

export const OrdersSlice = createSlice({
  name: "OrdersDataRetrieval",
  initialState: {
    Orders: [],
  },

  reducers: {
    setOrders: (state, action) => {
      state.Orders = action.payload;
    },
  },
});

//
export const selectOrders = (state) => state.OrdersDataRetrieval.Orders;
export const { setOrders } = OrdersSlice.actions;

export default OrdersSlice.reducer;
