import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "@/stores/counterSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, counterSlice);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
