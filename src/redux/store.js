import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import filterWord from './phonebook/phonebook-reducer';
import { contactsApi } from './phonebook/phonebook-slice';

const store = configureStore({
  reducer: {
    filterWord,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
