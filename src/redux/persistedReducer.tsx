import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["eventsredux", "usersredux"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
