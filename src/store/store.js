import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import initialState from "./initialState";
import infra_reducer from "infrastructure/reducer";

const persistConfig = {
  key: 'store',
  storage,
};
const persistedReducer = persistReducer(persistConfig, infra_reducer)

export const store = createStore(persistedReducer, initialState);
export const persistor = persistStore(store)

