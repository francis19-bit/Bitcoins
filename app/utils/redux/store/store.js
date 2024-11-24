import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CurrentUserSlice } from "../features/currentUserSlice";
import { ItemDataSlice } from "../features/ControlItemsSlice";
import { UserProfileSlice } from "../features/userProfileSlice";
import { CartSlice } from "../features/Cart";
import { OrdersSlice } from "../features/OrdersSlice";
import { AllProductForSearchingItemsSlice } from "../features/AllProductForSearchingItemsSlice";
import { ImageCarouselSlice } from "../features/ImageCarouselSlice";

// Combine reducers
const rootReducer = combineReducers({
  auth: CurrentUserSlice.reducer,
  ItemData: ItemDataSlice.reducer,
  user_profile: UserProfileSlice.reducer,
  DataRetrieval: CartSlice.reducer,
  images: ImageCarouselSlice.reducer,
  OrdersDataRetrieval: OrdersSlice.reducer,
  productsearch: AllProductForSearchingItemsSlice.reducer,
});

// Configure Redux Persist
const persistConfig = {
  key: "root", // Root key for the persisted state images
  version: 1, // Version of the persisted state
  storage: AsyncStorage, // Storage engine for persisting state
  blacklist: [], // Add any reducers you want to exclude from persistence
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
});

// Create the Redux Persistor
export const persistor = persistStore(store);
