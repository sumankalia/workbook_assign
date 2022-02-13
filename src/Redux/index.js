import { createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import workbookReducer from "./reducers/workbook";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["workbook"],
};

const rootReducer = combineReducers({
  workbook: workbookReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(persistedReducer, composeEnhancers());
let persistor = persistStore(store);

export { store, persistor };
