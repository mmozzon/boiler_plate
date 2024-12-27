import { configureStore } from '@reduxjs/toolkit';
import persistedReducer from "./persistedReducer";
import { persistStore } from "redux-persist";

  export const store = configureStore({
    reducer: persistedReducer,
  });

export const persistor = persistStore(store);
//persistor.purge();  

  // Types pour TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
