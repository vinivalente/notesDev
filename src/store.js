import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';

import hardSet from "redux-persist/es/stateReconciler/hardSet";
import rootReducer from './reducers';

const PersistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: hardSet
}

const pReducer = persistReducer(PersistConfig, rootReducer);

export const store = createStore(pReducer);
export const persistor = persistStore(store);