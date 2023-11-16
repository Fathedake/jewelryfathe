import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { authReducer } from "./slices/authSlice";
import { cartReducer } from "./slices/cartSlice";
import storage from "redux-persist/lib/storage";
//import thunkMiddleware from 'redux-thunk';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

//import storage from "./customStorage";
import logger from "redux-logger";

const authPersistConfig = {
  key: "auth",
  storage: storage,
  //whitelist: ["isAuth", "jid"],
};
const cartPersistConfig = {
  key: "cart",
  storage: storage,
  //whitelist: ["isAuth", "jid"],
};
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  cart:persistReducer(cartPersistConfig, cartReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE,REGISTER],
    },
  }),
 /*  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({ serializableCheck: false }).concat(logger),*/
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
