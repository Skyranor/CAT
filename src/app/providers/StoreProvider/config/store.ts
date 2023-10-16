import { configureStore } from '@reduxjs/toolkit';

import rtkApi from '@/shared/api/rtkApi';

const store = configureStore({
  reducer: {
    [rtkApi.reducerPath]: rtkApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
