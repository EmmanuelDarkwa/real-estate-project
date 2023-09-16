import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/usersSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const reducers = combineReducers({ userReducer: userReducer });
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
