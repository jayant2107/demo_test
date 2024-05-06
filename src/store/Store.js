import {combineReducers , configureStore } from "@reduxjs/toolkit";
import bookslice from './Createslice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import filterValueSlice from "./filterValueSlice";

const persistConfig = {
    key: 'outcoach',
    storage,
  }
  
  const reducers = combineReducers({
    login: bookslice,
    filterValue:filterValueSlice
  });
  
  
  const persistedReducer = persistReducer(persistConfig, reducers)
  
  const store = configureStore({
    reducer: persistedReducer
  });
  let persistor = persistStore(store)
  export { store, persistor };
  