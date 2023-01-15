import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactSlice';
// import { filtersSlice } from './filterSlice';

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts'],
// };

// const rootReducer = combineReducers({
//   contacts: contactSlice.reducer,
//   filters: filtersSlice.reducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // filters: filtersSlice.reducer,
  },
});

// export const persistor = persistStore(store);
